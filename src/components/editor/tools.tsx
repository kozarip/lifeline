import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { IToolsState } from 'interfaces/ITools';
import StationFilter from './controllers/station-filter';
import { CATEGORIES } from 'constants/categories';
import { STATIONS } from 'constants/stations';
import StationNumberBox from './stationNumberBox';
import { IStationComponentProps } from 'interfaces/IStationComponent';
import { useDispatch } from 'react-redux';
import { changeSelectedStationImage } from './store/actions';

class Tools extends React.Component<{}, IToolsState>{

  private stationFilter: any;
  private searchInput = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props)
    this.stationFilter = new StationFilter(STATIONS);
    this.state = {
      filterType: '',
      selectedFilterWord: '',
    }
  }

  render() {
    return (
      <div id="toolsContainer">
        {
          this.isSelectedFilterWordEmpty() ?
            <Link
              className="backToLink"
              to="/editor">
              Vissza a témákhoz
            </Link>
            :
            <span
              className="backToLink"
              onClick={this.cleanSelectedFilterWord}>
              Vissza a kategóriákhoz
            </span>
        }
        {this.renderSearchBox()}
        <StationNumberBox />
        {
          this.isSelectedFilterWordEmpty() ?
            this.renderCategories() :
            this.renderStations()
        }
      </div>
    )
  }

  isSelectedFilterWordEmpty() {
    return this.state.selectedFilterWord === '';
  }

  renderSearchBox() {
    return (
      <div className="searchBox">
        <input
          type="text"
          className="formattedTextBox toolTextbox"
          placeholder="Kép keresés"
          defaultValue=""
          name="searchStation"
          ref={this.searchInput}
        />

        <button onClick={this.handleSearch}><IoIosSearch /></button>
      </div>

    )
  }

  handleSearch = () => {
    if (this.searchInput.current) {
      this.selectFilter(this.searchInput.current.value, 'tag')
      this.searchInput.current.value = '';
    }
  }

  selectFilter = (selectedFilterWord, filterType) => {
    this.setState({ filterType, selectedFilterWord });
  }

  renderCategories() {
    return this.getItemsTemplate(CATEGORIES);
  }

  renderStations() {
    let filteredStations = []
    switch (this.state.filterType) {
    case ('category'):
      filteredStations = this.stationFilter.getStationsByCategory(this.state.selectedFilterWord);
      break;
    case ('tag'):
      filteredStations = this.stationFilter.getStationsByTag(this.state.selectedFilterWord);
      break;
    }
    return this.getItemsTemplate(filteredStations);
  }

  getItemsTemplate(items) {
    return (
      <React.Fragment>
        <div className="toolBox">
          <h4 className="capitalize">
            {this.isSelectedFilterWordEmpty() ?
              'Kategóriák'
              :
              this.state.selectedFilterWord + ' szóhoz tartozó állomások'
            }
          </h4>
          {this.isSelectedFilterWordEmpty() ?
            '' :
            <input
              className="toolTextbox"
              placeholder="Írj valamit az állomáshoz"
              defaultValue=""
              name="stationText"
            />
          }
          {items.map((item, i) => {
            return (
              <Station
                isSelectedFilterWordEmpty = {this.isSelectedFilterWordEmpty.bind(this)}
                selectFilter={this.selectFilter.bind(this)}
                item={item}
                i={i}
                key={i}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }

  cleanSelectedFilterWord = event => {
    event.preventDefault();
    const selectedFilterWord = '';
    const filterType = '';
    this.setState({ filterType, selectedFilterWord });
  }

}

const Station: React.FC<IStationComponentProps> = props => {

  const dispatch = useDispatch();
  return (
    <div
      className="item" key={props.i}
      onClick={
        props.isSelectedFilterWordEmpty() ?
          () => { props.selectFilter(props.item.name, 'category') } :
          () => { dispatch(changeSelectedStationImage(props.item.image)) }
      }
    >
      <img src={`${props.item.image}`} />
      <span>{props.item.name}</span>
    </div>
  )
}

export default Tools;
