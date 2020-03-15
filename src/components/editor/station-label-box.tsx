import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedStationAttribute } from './store/actions';
import { IStationLabelProps } from '../../interfaces/IStationLabel';

const StationLabelBox: React.FC<IStationLabelProps> = props => {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <input
        id="stationTextBoxEditor"
        className="toolTextbox"
        placeholder={
          props.type === 'text' ?
            'Irj szöveget az állomáshoz'
            : 'Irj dátumot az állomáshoz'
        }
        defaultValue=""
        maxLength={25}
        onKeyUp={
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
