import React from 'react'
import { Element } from 'react-scroll'

const Products: React.FC = () => {
  return (
    <section id="productsContainer"
      className="componentContainer wideHomeBox">
      <h2 className="componentTitle">Áraink</h2>
      <div className="productsBox">
        <div className="product">
          <img src=""></img>
          <div className="greyBox"></div>
          <h4>Termék 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <table>
            <thead>
              <tr><th>Paraméterek/Részletek</th></tr>
            </thead>
            <tbody>
              <tr><td>Megnevezés</td></tr>
              <tr><td>Méret</td></tr>
              <tr><td>Anyaga</td></tr>
              <tr><td>Technológia</td></tr>
            </tbody>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        <div className="product">
          <img src=""></img>
          <div className="greyBox"></div>
          <h4>Termék 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <table>
            <thead>
              <tr><th>Paraméterek/Részletek</th></tr>
            </thead>
            <tbody>
              <tr><td>Megnevezés</td></tr>
              <tr><td>Méret</td></tr>
              <tr><td>Anyaga</td></tr>
              <tr><td>Technológia</td></tr>
            </tbody>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        <div className="product">
          <img src=""></img>
          <div className="greyBox"></div>
          <h4>Termék 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <table>
            <thead>
              <tr><th>Paraméterek/Részletek</th></tr>
            </thead>
            <tbody>
              <tr><td>Megnevezés</td></tr>
              <tr><td>Méret</td></tr>
              <tr><td>Anyaga</td></tr>
              <tr><td>Technológia</td></tr>
            </tbody>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        </div>
    </section>
  )
}

export default Products;
