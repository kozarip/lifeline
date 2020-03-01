import React from 'react';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { useDispatch, useSelector } from 'react-redux';
import {
  IThemeSelectorProps,
  IThemeSelectorStates
} from 'interfaces/IThemeSelector';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

import { THEMES } from 'constants/themes';
import { changeTheme } from './store/actions';
import AgeEditor from './age-editor';

//TODO: move to an own;
const ThemeSelector: React.FC = () => {
  const dispatch = useDispatch()
  const stationNumber = useSelector(
    (state: any) => state.stationNumber
  )
  return (
    <ThemeSelectorBox
      appStationNumber={stationNumber}
      saveSelectedTheme={ themeId => {
        dispatch(changeTheme(themeId))
      }}
    />
  )
}

class ThemeSelectorBox extends React.Component<IThemeSelectorProps, IThemeSelectorStates> {

  private imageList: string[]
  private saveSelectedTheme: Function

  constructor(props) {
    super(props)
    this.saveSelectedTheme = props.saveSelectedTheme;
    this.imageList = THEMES.map(theme => theme.image)
    this.state = {
      themeId: -1,
      isModalOpen: false,
    }
  }

  render() {
    return (
      <section id="themeSelectorContainer" className="wideHomeBox">
        <h3 className="title">Kérlek válassz témát!</h3>
        <ImagePicker
          images={this.imageList.map((image, i) =>
            ({ src: image, value: i }))}
          onPick={this.handleThemePick}
        />
        {this.state.themeId >-1 ?
          <button
            className="btn smallBtn"
            onClick={this.handleSelectPickedTheme}>
            Választás
          </button>
          :
          ''
        }
        <Modal
          className="ageSelectorModal"
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}>
          <IoIosCloseCircleOutline
            className="closeModal"
            onClick={this.handleCloseModal} />
          <AgeEditor
            appStationNumber={this.props.appStationNumber}
          />
        </Modal>
      </section>
    )
  }

  handleThemePick = image => {
    this.setState({ themeId: image.value })
  }

  handleSelectPickedTheme = () => {
    this.saveSelectedTheme(this.state.themeId);
    this.setState({ isModalOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  }
}

export default ThemeSelector;
