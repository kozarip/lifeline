import React from 'react'
import { Element } from 'react-scroll';
import { Trans } from '@lingui/macro';


const Introduce: React.FC = () => {
  return (
    <Element name="introduce" className="componentContainer narrowHomeBox introduceContainer">
      <img src={require("../../images/introduce.png")} />
      <h2 className="componentTitle"><Trans>Mi is a Mesélő képek?</Trans></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </Element>
  )
}

export default Introduce;
