import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector, useDispatch } from 'react-redux';
import { THEMES } from 'constants/themes'
import Point from './controllers/point';
import { changeSelectedThemeId } from 'components/editor/store/actions';

const Preview: React.FC = () => {
  const {
    themeId,
    stationNumber,
    customerStations,
    selectedStationImage,
  } = useSelector(
    (state: any) => state
  );
  const dispatch = useDispatch()
  const currentThemeId = themeId ?
    themeId
    :
    0;

  const handleCustomerStationClick = event => {
    const selected = event.target;
    selected.classList.add('selected')
    console.log(selected.dataset.id)
    dispatch(changeSelectedThemeId(selected.dataset.id))
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
      <button onClick={printDocument}>Nyomtatás</button>
    </React.Fragment>
  )
};


function printDocument() {
  const input = document.getElementById('previewContainer');
  if (input) {
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save('download.pdf');
      });
  }
}

export default Preview;
