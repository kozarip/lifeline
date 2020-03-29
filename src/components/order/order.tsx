import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { printDocument } from 'utils/print';
import Pay from './pay';
import { useAlert } from 'react-alert'
import html2canvas from 'html2canvas';

const Order: React.FC = () => {

  const [isFormFilled, setIsFormFilled] = useState(false);
  const alert = useAlert();

  const handlePay = event => {
    event.preventDefault();
    const conditions = document.getElementById('conditions');
    if (conditions && !(conditions as HTMLInputElement).checked) {
      alert.show('Kérlek fogadd el a felhasználási feltételeket')
    } else {
      setIsFormFilled(true);
    }
  }

  useEffect(() => {
    const orderPreview = document.getElementById('orderPreview')
    const secretPreview = document.getElementById('secretPreview')
    if (orderPreview && secretPreview) {
      html2canvas(secretPreview).then(canvas => {
        /* console.log(canvas);
        const imgData = canvas.toDataURL('image/png');
        console.log(imgData); */
        orderPreview.innerHTML = canvas.outerHTML;
      })
    }
  })

  return (
    <section id="editorContainer" className="wideHomeBox">
      <h2 className="componentTitle">Kérlek add meg az adataidat</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div id="orderPreview" ></div>
      <p>Ár: <span id="price">20</span><span id="currency">HUF</span></p>
      <div id="inputContainer">
        <form onSubmit={handlePay}>
          <input className="narrowHomeBox textBox"
            id="name"
            type="text"
            name="name"
            required
            placeholder="Neved" />
          <input className="narrowHomeBox textBox"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email címed" />
          <textarea className="narrowHomeBox"
            placeholder="Megjegyzés"
            rows={3}></textarea>
          <fieldset>
            <input type="checkbox"
              id="registration"
              name="registration" />
            <label htmlFor="registration" >Regisztrálni szeretnék</label>
          </fieldset>
          <fieldset>
            <input type="checkbox"
              id="conditions"
              name="conditions" />
            <label htmlFor="conditions">
              <Link to="/conditions">Elfogadom a felhasználási feltételeket</Link>
            </label>
          </fieldset>
          {!isFormFilled && <input
            className="btn smallBtn"
            type="submit"
            value="Tovább a fizetésre" />
          }
          {isFormFilled && <Pay />}
        </form>
        <Link
          className="btn smallBtn"
          to="/editor/editor">
          Vissza a szerkesztésre
        </Link>
      </div>
      <button
        id="print"
        className="btn smallBtn"
        onClick={printDocument}>Nyomtatás (teszt)</button>
    </section>
  )
}

export default Order;
