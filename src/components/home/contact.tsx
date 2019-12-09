import React from 'react'
import { Element } from 'react-scroll';

const Contact: React.FC = () => {
  return (
    <Element name="contact" className="homeBox contactBox">
      <h2 className="boxTitle">Lépj velünk kapcsolatba!</h2>
      <p className="narrowHomeBox" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt. Nulla ultrices et turpis vitae blandit. Integer nec dictum ante. Nulla sodales mauris dui, sed faucibus erat condimentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac metus ex. Integer porta fermentum lobortis. Maecenas tincidunt turpis vitae mi elementum, non commodo augue varius. Donec in vehicula sapien.</p>
      <form>
        <input className="narrowHomeBox textBox"  type="text" name="name" placeholder="Neved" />
        <input className="narrowHomeBox textBox"  type="email" name="email" placeholder="Email címed" />
        <textarea className="narrowHomeBox" placeholder="Üzenet (maximum x karakter)" rows={7}></textarea>
        <input className="btn" type="submit" value="Üzenet elküldése" />
      </form>
      <h3>Közösségi oldalakon is megtalálsz minket!</h3>
      <div className="socialBox">
        <a href="#">facebook</a>
        <a href="#">intsagram</a>
      </div>
    </Element>
  )
}

export default Contact;
