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
          className="toolTextbox"
          placeholder="Írj valamit az állomáshoz"
          defaultValue=""
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

export default StationsEditor;
