import React from 'react';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { IThemeSelectorStates } from 'interfaces/IThemeSelector';
import AgeSelector from './age-selector';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

import theme1 from 'images/themes/theme1.jpg';
import theme2 from 'images/themes/theme2.png';

const imageList = [theme1, theme2];

class ThemeSelector extends React.Component<{}, IThemeSelectorStates> {

  constructor(props) {
    super(props)
    this.state = {
      image: {
        src: '',
        value: 0
      },
      isModalOpen: false,
    }
  }

  render() {
    return (
      <section id="themeSelectorContainer" className="wideHomeBox">
        <h3 className="title">Kérlek válassz témát!</h3>
        <ImagePicker
          images={imageList.map((image, i) =>
            ({ src: image, value: i }))}
          onPick={this.handleThemePick}
        />
        {this.state.image.src !== '' ?
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
          <AgeSelector />
        </Modal>
      </section>
    )
  }

  handleThemePick = image => {
    this.setState({ image })
  }

  handleSelectPickedTheme = () => {
    console.log(this.state.image)
    this.setState({ isModalOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  }
}

export default ThemeSelector;
