import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import { THEMES } from 'constants/themes'
import Point from './controllers/point';

const Preview: React.FC = () => {
  const {
    themeId,
    stationNumber,
    customerStations
  } = useSelector(
    (state: any) => state
  );
  const currentThemeId = themeId ?
    themeId
    :
    0;

  return (
    <React.Fragment>
      <section style={{position: 'relative'}} id="previewContainer">
        {
          customerStations.map((customerStation, i) => {
            return (
              <div style={{top: customerStation.position.y, left: customerStation.position.x }} className="stationPin" key={i}>
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
