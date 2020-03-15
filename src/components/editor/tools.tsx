import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { IToolsState } from 'interfaces/ITools';
import StationFilter from '../../utils/station-filter';
import { CATEGORIES } from 'constants/categories';
import { STATIONS } from 'constants/stations';
import StationNumberBox from './station-number-box';
import StationLister from './station-lister';
import { TagsDictonary } from 'enums/station';
import StationLabelBox from './station-label-box';
import MainTitleEditor from './main-title-editor';

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
    const tags = Object.keys(TagsDictonary).map(key => TagsDictonary[key]);
    return (
      <div className="searchBox">
        <input
          type="text"
          className="formattedTextBox toolTextbox"
          placeholder="Kép keresés"
          defaultValue=""
          name="stations"
          list="tags"
          onKeyDown={this.handleSearchEnter}
          ref={this.searchInput}
          onInput={this.handleSearch}
        />
        <datalist id="tags">
          {
            tags.map(tag => <option key={tag} value={tag} />)
          }
        </datalist>

        <button onClick={this.handleSearch}><IoIosSearch /></button>
      </div>

    )
  }

  handleSearchEnter = (event: any) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
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
    case 'category':
      filteredStations = this.stationFilter.getStationsByCategory(this.state.selectedFilterWord);
      break;
    case 'tag':
      filteredStations = this.stationFilter.getStationsByTag(this.state.selectedFilterWord);
      break;
    }
    return this.getItemsTemplate(filteredStations);
  }

  getItemsTemplate(items) {
    return (
      <React.Fragment>
        <div className="toolBox">
          {/* <StationLabelBox type="date" />
          <StationLabelBox type="text" /> */}
          <h4 className="capitalize">
            {this.isSelectedFilterWordEmpty() ?
              'Kategóriák'
              :
              this.state.selectedFilterWord + ' szóhoz tartozó állomások'
            }
          </h4>
          <StationLister
            items={items}
            isSelectedFilterWordEmpty = {this.isSelectedFilterWordEmpty.bind(this)}
            selectFilter={this.selectFilter.bind(this)}
          />
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
