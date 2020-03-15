import React from 'react';
import { useDispatch } from 'react-redux';
import { IStationLister } from '../../interfaces/IStationLister';
import { changeSelectedStationAttribute } from './store/actions';

const StationLister: React.FC<IStationLister> = props => {

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {props.items.map((item, i) => {
        return (
          <div
            className="item" key={i}
            onClick={
              props.isSelectedFilterWordEmpty() ?
                () => { props.selectFilter(item.name, 'category') } :
                () => { dispatch(changeSelectedStationAttribute('image', item.image)) }
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

export default StationLister;
