import React from 'react'
import { Element } from 'react-scroll';

const Introduce: React.FC = () => {
  return (
    <Element name="introduce" className="homeBox narrowHomeBox">
      <img src={require("../../images/introduce.png")} />
      <h2 className="boxTitle">Mi is a Mesélő képek?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt. Nulla ultrices et turpis vitae blandit. Integer nec dictum ante. Nulla sodales mauris dui, sed faucibus erat condimentum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac metus ex. Integer porta fermentum lobortis. Maecenas tincidunt turpis vitae mi elementum, non commodo augue varius. Donec in vehicula sapien.</p>
    </Element>
  )
}

export default Introduce;
