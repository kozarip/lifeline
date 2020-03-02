import React from 'react'
import { Link } from 'react-router-dom';
import StationNumberBox from './station-number-box';
import { useSelector, useDispatch } from 'react-redux';
import { changeStationNumber } from './store/actions';

const AgeEditor: React.FC = () => {

  const stationNumber = useSelector(
    (state: any) => state.stationNumber
  )
  const dispatch = useDispatch();

  const setRecommendedStationNumber = () => {
    let age = 0
    const ageInput = document.getElementById('ageInput');
    if (ageInput) {
      age = parseInt((ageInput as HTMLInputElement).value);
      if (age > 0) {
        dispatch(changeStationNumber(Math.floor(age / 2)));
      }

    }
  }

  return(
    <React.Fragment>
      {stationNumber === 0 ?
        <React.Fragment>
          <h3>Írd be az életkorodat</h3>
          <input
            id="ageInput"
            className="formattedTextBox textBox"
            type="number"
            placeholder="Életkorod" />
          <a
            className="btn smallBtn"
            onClick={setRecommendedStationNumber} >
            Tovább
          </a>
        </React.Fragment>
        :
        ''
      }
      {stationNumber > 0 ?
        <div>
          <div>Ajánlott
            <StationNumberBox
              recommendedStationNumber = {stationNumber}
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

export default AgeEditor;
