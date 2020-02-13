import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';

const Preview: React.FC = () => {
  const {
    themeImageSrc,
    customerStations
  } = useSelector(
    (state: any) => state
  );

  const currentThemeImageSrc = themeImageSrc ?
    themeImageSrc
    :
    require('images/themes/theme1.jpg');

  return (
    <React.Fragment>
      <section style={{position: 'relative'}} id="previewContainer">
        {
          customerStations.map((customerStation, i) => {
            return (
              <div key={i}>
                <img src={customerStation.image} />
                <span>{customerStation.text}</span>
              </div>
            )
          })
        }
        <img src={currentThemeImageSrc} />
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
