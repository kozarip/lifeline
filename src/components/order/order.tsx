import React from 'react';
import { Link } from 'react-router-dom';
import { printDocument } from 'components/editor/controllers/print';


const Order: React.FC = () => {

  return (
    <section id="editorContainer" className="wideHomeBox">
      <h2 className="componentTitle">Kérlek add meg az adataidat</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div id="inputContainer">
        <form>
          <input className="narrowHomeBox textBox"
            type="text"
            name="name"
            placeholder="Neved" />
          <input className="narrowHomeBox textBox"
            type="email"
            name="email"
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
              <Link to="/conditions">Elfogadom a felhsználási feltételeket</Link>
            </label>
          </fieldset>
          <button className="btn smallBtn">Fizetés</button>
        </form>
      </div>
      <button onClick={printDocument}>Nyomtatás (teszt)</button>
    </section>
  )
}

export default Order;
