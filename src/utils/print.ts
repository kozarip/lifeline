
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function printDocument() {
  const input = document.getElementById('secretPreview');
  if (input) {
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        //document.body.appendChild(canvas)
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        pdf.addImage(imgData, 'JPEG', 0, -42);
        // pdf.output('dataurlnewwindow');
        pdf.save('eletutad.pdf');
      });
  }
}
