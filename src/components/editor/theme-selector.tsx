import React from 'react';
import Modal from 'react-modal';

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

  onPick = image => {
    this.setState({ image })
  }

  onSelect = () => {
    console.log(this.state.image)
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <section id="themeSelectorContainer" className="wideHomeBox">
        <ImagePicker
          images={imageList.map((image, i) =>
            ({ src: image, value: i }))}
          onPick={this.onPick}
        />
        <button
          className="btn smallBtn"
          onClick={this.onSelect}>
          Választás
        </button>
        <Modal
          className="ageSelectorModal"
          isOpen={this.state.isModalOpen} >
          <AgeSelector />
        </Modal>
      </section>
    )
  }
}

export default ThemeSelector;
