import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStationLister } from '../../interfaces/IStationLister';
import { changeSelectedStationAttribute } from './store/actions';
import { useAlert } from 'react-alert';

const StationLister: React.FC<IStationLister> = props => {

  const { selectedStationId } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const alert = useAlert();

  return (
    <React.Fragment>
      {props.items.map((item, i) => {
        return (
          <div
            className="item" key={i}
            onClick={
              props.isSelectedFilterWordEmpty() ?
                () => { props.selectFilter(item.name, 'category') } :
                () => {
                  if (selectedStationId) {
                    dispatch(changeSelectedStationAttribute('image', item.image))
                  } else {
                    alert.show('Kérlek elősször válaszd ki a szerkeszteni kívánt állomást');
                  }
                }
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
