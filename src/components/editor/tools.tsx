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
  private mainEditorContainer

  constructor(props) {
    super(props)
    this.stationFilter = new StationFilter(STATIONS);
    this.state = {
      filterType: '',
      selectedFilterWord: '',
      isFullScreen: false
    }
  }

  componentDidMount() {
    this.mainEditorContainer = document.getElementById("mainEditorContainer");
    document.addEventListener('fullscreenchange',
      () => {
        if (!document.fullscreenElement)
          this.setState({ isFullScreen: false })
      }, false);

  }

  render() {
    return (
      <div id="toolsContainer">
        {
          this.isSelectedFilterWordEmpty() && !this.state.isFullScreen ?
            <Link
              className="toolsButton"
              to="/editor">
              Vissza a témákhoz
            </Link>
            :
            !this.isSelectedFilterWordEmpty() &&
            <span
              className="toolsButton"
              onClick={this.cleanSelectedFilterWord}>
              Vissza a kategóriákhoz
            </span>
        }
        <br />
        {
          this.state.isFullScreen ?
            <span
              className="toolsButton"
              onClick={this.closeFullScreen}>
              Kilépés teljes képernyő módból
            </span>
            :
            <span
              className="toolsButton"
              onClick={this.openFullScreen}>
              Váltás teljes képernyő módra
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

  closeFullScreen = () => {
    this.setState({isFullScreen: false});
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  openFullScreen = () => {
    this.setState({ isFullScreen: true });
    if (this.mainEditorContainer.requestFullscreen) {
      this.mainEditorContainer.requestFullscreen();
    } else if (this.mainEditorContainer.mozRequestFullScreen) { /* Firefox */
      this.mainEditorContainer.mozRequestFullScreen();
    } else if (this.mainEditorContainer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      this.mainEditorContainer.webkitRequestFullscreen();
    } else if (this.mainEditorContainer.msRequestFullscreen) { /* IE/Edge */
      this.mainEditorContainer.msRequestFullscreen();
    }
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
