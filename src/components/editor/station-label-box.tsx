import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedStationAttribute } from './store/actions';
import { IStationLabelProps } from '../../interfaces/IStationLabel';

const StationLabelBox: React.FC<IStationLabelProps> = props => {

  const dispatch = useDispatch();
  const {
    selectedStationId,
    customerStations
  } = useSelector((state: any) => state);

  return (
    <React.Fragment>
      <input
        className="stationTextBoxEditor previewInput"
        type={props.type}
        value={
          customerStations.length ?
            customerStations[props.stationNumber][props.type]
            : ""
        }
        maxLength={25}
        onChange={
          event => {
            dispatch(
              changeSelectedStationAttribute(props.type, (event.target as HTMLInputElement).value)
            )
          }
        }
        name="stationText"
      />
    </React.Fragment>
  );
}

export function clearStationTextBox() {
  const stationTextBoxes = document.getElementsByClassName('stationTextBoxEditor');
  for (let i = 0; i < stationTextBoxes.length; i++) {
    (stationTextBoxes[i] as HTMLInputElement).value = ''
  }
}

export default StationLabelBox;
