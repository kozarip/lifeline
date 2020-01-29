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
  /**
   * TODO: use React contexAPI
   * const [state, dispatch] = useReducer(reducer, initialState);
   * const { stationNumber } = state;
   */

  return (
    <div className="stationNumberBox">
      <label htmlFor="stationNumber">
        Állomás szám:
      </label>
      <input
        id="stationNumber"
        className="formattedTextBox"
        type="number"
        onChange={
          event => {
            dispatch(changeStationNumber(event.target.value))
          }
        }
        value={stationNumber}
        min="1" />
    </div>
  )
}

export default StationNumberBox;
