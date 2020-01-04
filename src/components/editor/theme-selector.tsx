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
      }
    }
  }

  onPick = image => {
    this.setState({ image })
  }

  render() {
    return (
      <section id="themeSelectorContainer" className="wideHomeBox">
        <ImagePicker
          images={imageList.map((image, i) =>
            ({ src: image, value: i }))}
          onPick={this.onPick}
        />
        <Link to="/editor/editor"
          className="btn smallBtn"
          onClick={
            () => console.log(this.state.image)
          }>
          Választás
        </Link>
      </section>
    )
  }
}

export default ThemeSelector;
