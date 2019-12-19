import React from 'react'
import { IToolsState } from 'interfaces/ITools'
import StationFilter from './station';
import { CATEGORIES } from 'constants/categories';
import { STATIONS } from 'constants/stations';

class Tools extends React.Component<{}, IToolsState>{

  stationFilter: any;

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
        <input
          onKeyPress={this.handleSearch}
          placeholder="Állomás keresés..."
          defaultValue=""
          name="station" />
        {
          this.isSelectedFilterWordEmpty() ?
            this.renderCategories() :
            this.renderStations()
        }
      </div>
    )
  }

  handleSearch = event => {
    if (event.key === 'Enter') {
      this.selectFilter(event.target.value, 'tag')
    }
  }

  isSelectedFilterWordEmpty() {
    return this.state.selectedFilterWord === '';
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
