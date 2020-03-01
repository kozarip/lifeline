import React from 'react'
import { Link } from 'react-router-dom';
import  { AgeEditorProps, AgeEditorStates } from 'interfaces/IAgeEditor';
import StationNumberBox from './station-number-box';

class AgeEditor extends React.Component<AgeEditorProps,  AgeEditorStates>{

  private ageInput = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props)
    this.state = {
      recommendedStationNumber: 0,
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.appStationNumber === 0 ?
          <React.Fragment>
            <h3>Írd be az életkorodat</h3>
            <input
              ref={this.ageInput}
              className="formattedTextBox textBox"
              type="number"
              placeholder="Életkorod" />
            <a
              className="btn smallBtn"
              onClick={this.setRecommendedStationNumber} >
              Tovább
            </a>
          </React.Fragment>
          :
          ''
        }
        {this.state.recommendedStationNumber > 0 ?
          <div>
            <div>Ajánlott
              <StationNumberBox
                recommendedStationNumber = {this.state.recommendedStationNumber}
              /><br />
              <small>Késöbb tudod módosítani</small>
            </div>
            <Link
              to="/editor/editor"
              className="btn smallBtn" >
              Tovább
            </Link>
          </div>
          :
          ''
        }
      </React.Fragment>
    )
  }

  setRecommendedStationNumber = () => {
    let age = 0
    if (this.ageInput.current) {
      age = parseInt(this.ageInput.current.value);
      if (age > 0) {
        this.setState({
          recommendedStationNumber: Math.floor(age / 2)
        })
      }

    }
  }

}

export default AgeEditor;
