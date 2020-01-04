import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { IToolsState } from 'interfaces/ITools';
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
        {
          this.isSelectedFilterWordEmpty() ?
            <Link
              className="backToLink"
              to="/editor">
              Vissza a témákhoz
            </Link>
            :
            <a
              className="backToLink"
              href="#"
              onClick={this.cleanSelectedFilterWord}>
              Vissza a kategóriákhoz
            </a>
        }
        {this.renderSearchBox()}
        {this.renderStationNumberBox()}
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
          placeholder="Keress képet"
          defaultValue=""
          name="searchStation"
          ref={this.searchInput}
        />
        <button onClick={this.handleSearch}><IoIosSearch /></button>
      </div>

    )
  }

  renderStationNumberBox() {
    return (
      <div className="stationNumberBox">
        <label htmlFor="stationNumber">
          Állomás szám:
        </label>
        <input
          id="stationNumber"
          className="formattedTextBox"
          type="number"
          min="1" />
      </div>
    )
  }

  handleSearch = () => {
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
