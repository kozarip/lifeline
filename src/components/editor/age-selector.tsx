import React from 'react'
import { Link } from 'react-router-dom';
import { IAgeSelectorStates } from 'interfaces/IAgeSelector';

class AgeSelector extends React.Component<{}, IAgeSelectorStates>{

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
        <h3>Írd be az életkorodat</h3>
        <input
          ref={this.ageInput}
          className="formattedTextBox textBox"
          type="number"
          onBlur={this.setRecommendedStationNumber}
          placeholder="Életkorod" />
        {this.state.recommendedStationNumber === 0 ?
          <a
            className="btn smallBtn"
            onClick={this.setRecommendedStationNumber} >
            Tovább
          </a>
          :
          ''
        }
        {this.state.recommendedStationNumber > 0 ?
          <div>
            <p>Neked
              <input
                className="stationNumberTextBox"
                type="number"
                min="1"
                value={this.state.recommendedStationNumber} />
              állomást ajánlunk!</p>
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
      this.setState({
        recommendedStationNumber: Math.floor(age / 2)
      })

    }
  }

}

export default AgeSelector;
