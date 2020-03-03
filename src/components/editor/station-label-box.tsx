import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedStationText } from './store/actions';

const StationLabelBox: React.FC = props => {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <input
        id="stationTextBox"
        className="toolTextbox"
        placeholder="Írj valamit az állomáshoz"
        defaultValue=""
        maxLength={25}
        onKeyUp={
          event => {
            dispatch(
              changeSelectedStationText((event.target as HTMLInputElement).value)
            )
          }
        }
        name="stationText"
      />
    </React.Fragment>
  );
}

export function clearStationTextBox() {
  const stationTextBox = document.getElementById('stationTextBox');
  if (stationTextBox) {
    (stationTextBox as HTMLInputElement).value = ''
  }
}

export default StationLabelBox;
