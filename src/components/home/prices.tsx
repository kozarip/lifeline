import React from 'react'
import { Element } from 'react-scroll'

const Prices: React.FC = () => {
  return (
    <Element name="prices" className="homeBox wideHomeBox productsContainer">
      <h2 className="boxTitle">Áraink</h2>
      <div className="productsBox">
        <div className="product">
          <img src=""></img>
          <h4>Termék 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt. Nulla ultrices et turpis vitae blandit. Integer nec dictum ante. Nulla sodales mauris dui, sed faucibus erat condimentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac metus ex. Integer porta fermentum lobortis. Maecenas tincidunt turpis vitae mi elementum, non commodo augue varius. Donec in vehicula sapien.</p>
          <table>
            <tr><th>Paraméterek/Részletek</th></tr>
            <tr><td>Megnevezés</td></tr>
            <tr><td>Méret</td></tr>
            <tr><td>Anyaga</td></tr>
            <tr><td>Technológia</td></tr>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        <div className="product">
          <img src=""></img>
          <h4>Termék 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt. Nulla ultrices et turpis vitae blandit. Integer nec dictum ante. Nulla sodales mauris dui, sed faucibus erat condimentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac metus ex. Integer porta fermentum lobortis. Maecenas tincidunt turpis vitae mi elementum, non commodo augue varius. Donec in vehicula sapien.</p>
          <table>
            <tr><th>Paraméterek/Részletek</th></tr>
            <tr><td>Megnevezés</td></tr>
            <tr><td>Méret</td></tr>
            <tr><td>Anyaga</td></tr>
            <tr><td>Technológia</td></tr>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        <div className="product">
          <img src=""></img>
          <h4>Termék 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt. Nulla ultrices et turpis vitae blandit. Integer nec dictum ante. Nulla sodales mauris dui, sed faucibus erat condimentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac metus ex. Integer porta fermentum lobortis. Maecenas tincidunt turpis vitae mi elementum, non commodo augue varius. Donec in vehicula sapien.</p>
          <table>
            <tr><th>Paraméterek/Részletek</th></tr>
            <tr><td>Megnevezés</td></tr>
            <tr><td>Méret</td></tr>
            <tr><td>Anyaga</td></tr>
            <tr><td>Technológia</td></tr>
          </table>
          <span className="price">15 000 Ft</span>
        </div>
        </div>
    </Element>
  )
}

export default Prices;
