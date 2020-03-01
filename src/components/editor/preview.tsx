import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from 'constants/themes'
import { changeSelectedThemeId } from 'components/editor/store/actions';

const Preview: React.FC = () => {
  const {
    themeId,
    customerStations,
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
    dispatch(changeSelectedThemeId(selected.dataset.id))
  }

  const removeSelections = () => {
    const allCustomerStation = document.getElementsByClassName('stationPin')
    for (let i = 0; i < allCustomerStation.length; i++){
      allCustomerStation[i].classList.remove('selected');
    };
  }

  return (
    <React.Fragment>
      <section style={{position: 'relative'}} id="previewContainer">
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
                <img src={customerStation.image} />
                <span className="stationPinText">{customerStation.text}</span>
              </div>
            )
          })
        }
        <img src={THEMES[currentThemeId].image} />
      </section>
    </React.Fragment>
  )
};

export default Preview;
