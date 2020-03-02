import React from 'react';
import { IStationsEditorProps } from 'interfaces/IStationComponent';
import { useDispatch } from 'react-redux';
import {
  changeSelectedStationText,
  changeSelectedStationImage
} from './store/actions';

const StationsEditor: React.FC<IStationsEditorProps> = props => {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {props.isSelectedFilterWordEmpty() ?
        '' :
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
      }
      {props.items.map((item, i) => {
        return (
          <div
            className="item" key={i}
            onClick={
              props.isSelectedFilterWordEmpty() ?
                () => { props.selectFilter(item.name, 'category') } :
                () => { dispatch(changeSelectedStationImage(item.image)) }
            }
          >
            <img src={`${item.image}`} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export function clearStationTextBox() {
  const stationTextBox = document.getElementById('stationTextBox');
  if (stationTextBox) {
    (stationTextBox as HTMLInputElement).value = ''
  }
}

export default StationsEditor;
