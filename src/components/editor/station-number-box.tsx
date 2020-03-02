import React,  {useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStationNumber } from './store/actions'
import { IStationNumberProps } from 'interfaces/IStationNumber';
//import {reducer, initialState} from './store/reducers' ;


const StationNumberBox: React.FC<IStationNumberProps> = ({ recommendedStationNumber }) => {
  const savedStationNumber = useSelector(
    (state: any) => state.stationNumber
  );
  const stationNumber = savedStationNumber ?
    savedStationNumber
    :
    recommendedStationNumber
  ;
  const dispatch = useDispatch();
  dispatch(changeStationNumber(stationNumber))
  /**
   * TODO: use React contexAPI
   * const [state, dispatch] = useReducer(reducer, initialState);
   * const { stationNumber } = state;
   */

  const handleStationInputEnter = (event: any) => {
    if (event.key === 'Enter') {
      setStationNumber();
    }
  }

  const setStationNumber = () => {
    const stationNumberInput = document.getElementById('stationNumber')
    const selectedStationNumber =
      stationNumberInput ?
        (stationNumberInput as HTMLInputElement).value :
        0
    dispatch(changeStationNumber(selectedStationNumber))
  }

  return (
    <div className="stationNumberBox">
      <label htmlFor="stationNumber">
        Állomás szám:
      </label>
      <input
        id="stationNumber"
        className="formattedTextBox"
        type="text"
        defaultValue={stationNumber ? stationNumber : 0}
        onKeyPress={handleStationInputEnter}
      />
      <button
        className="btn tinyBtn"
        onClick={setStationNumber}
      >Mentés</button>
    </div>
  )
}

export default StationNumberBox;
