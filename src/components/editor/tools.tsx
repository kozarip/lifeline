import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IToolsState } from 'interfaces/ITools'
import StationFilter from './station';
import { CATEGORIES } from 'constants/categories';
import { STATIONS } from 'constants/stations';

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
        { this.renderSearchBox() }
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
          className="toolTextbox"
          placeholder="Állomás keresés..."
          defaultValue=""
          name="station"
          ref={this.searchInput}
        />
        <button onClick={this.handleSearch}><IoIosSearch /></button>
      </div>

    )
  }

  handleSearch = event => {
    if (this.searchInput.current) {
      this.selectFilter(this.searchInput.current.value, 'tag')
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
        <h4>
          {this.isSelectedFilterWordEmpty() ?
            'Kategóriák' :
            'Állomások'
          }</h4>
        <div className="toolBox">
          {
            this.isSelectedFilterWordEmpty() ?
              '' :
              <a
                className="backToCategories"
                href="#"
                onClick={this.cleanSelectedFilterWord}>
                Vissza a kategóriákhoz
              </a>
          }
          {items.map((item, i) => {
            return (
              <div
                className="item" key={i}
                onClick={
                  this.isSelectedFilterWordEmpty() ?
                    () => { this.selectFilter(item.name, 'category') } :
                    () => {}
                }
              >
                <img src={`${item.image}`} />
                <span>{item.name}</span>
              </div>
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
export default Tools;
