import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from 'constants/themes'
import { changeSelectedThemeId } from 'components/editor/store/actions';
import StationLabelBox, { clearStationTextBox } from './station-label-box';
import MainTitleEditor from './main-title-editor';

const Preview: React.FC = () => {
  const {
    themeId,
    customerStations,
    mainTitle,
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
    clearStationTextBox();
    let selected: HTMLElement;
    if (event.target.classList.contains('stationPin')) {
      selected = event.target;
    } else {
      selected = event.target.parentNode;
    }

    selected.classList.add('selected')
    dispatch(changeSelectedThemeId(selected.dataset.id))
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
                  {/* {customerStation.date} */}
                </span>
                <img src={customerStation.image} />
                <StationLabelBox type="text" stationNumber={i} />
                <span
                  className="stationPinText">
                  {/* {customerStation.text} */}
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
  const customerStationsPinLabels = document.getElementsByClassName('stationPinText');
  for (let i = 0; i < customerStationsPinLabels.length; i++){
    if (
      customerStationsPinLabels[i].innerHTML === 'Ide irhatsz'
      || customerStationsPinLabels[i].innerHTML === 'Dátum'
    ) {
      (customerStationsPinLabels[i] as HTMLElement).style.display = 'none';
    }
  }
}

export default Preview;
