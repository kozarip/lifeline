import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from 'constants/themes'
import { setSelectedThemeId } from 'components/editor/store/actions';
import StationLabelBox from './station-label-box';
import MainTitleEditor from './main-title-editor';

const Preview: React.FC = () => {
  const {
    themeId,
    customerStations
  } = useSelector(
    (state: any) => state
  );
  const dispatch = useDispatch()
  const currentThemeId = themeId ?
    themeId
    :
    0;

  const handleCustomerStationClick = event => {
    removeSelections();
    let selected: HTMLElement;
    if (event.target.classList.contains('stationPin')) {
      selected = event.target;
    } else {
      selected = event.target.parentNode;
    }

    selected.classList.add('selected')
    dispatch(setSelectedThemeId(selected.dataset.id))
  }

  return (
    <React.Fragment>
      <section style={{ position: 'relative' }} id="previewContainer">
        <MainTitleEditor />
        {
          customerStations.map((customerStation, i) => {
            return (
              <div
                style={{ top: customerStation.position.y, left: customerStation.position.x }}
                className="stationPin"
                key={i}
                data-id={i}
                onClick={handleCustomerStationClick}
              >
                <StationLabelBox type="date" stationNumber={i} />
                <span
                  className="stationPinText">
                </span>
                <img src={customerStation.image} />
                <StationLabelBox type="text" stationNumber={i} />
                <span
                  className="stationPinText">
                </span>
              </div>
            )
          })
        }
        <img src={THEMES[currentThemeId].image} />
      </section>
    </React.Fragment>
  )
};

export function removeSelections(){
  const allCustomerStation = document.getElementsByClassName('stationPin')
  for (let i = 0; i < allCustomerStation.length; i++){
    allCustomerStation[i].classList.remove('selected');
  };
}

export function removeDefaultLabels(){
  const customerStationsPinLabels = document.getElementsByClassName('previewInput');
  for (let i = 0; i < customerStationsPinLabels.length; i++){
    if (
      (customerStationsPinLabels[i] as HTMLInputElement).value === 'Ide irhatsz'
      || (customerStationsPinLabels[i] as HTMLInputElement).value === 'Dátum'
      || (customerStationsPinLabels[i] as HTMLInputElement).value === 'Cím helye'
    ) {
      (customerStationsPinLabels[i] as HTMLElement).style.display = 'none';
    }
  }
}

export default Preview;
