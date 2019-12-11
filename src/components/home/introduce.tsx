import React from 'react'
import { Trans } from '@lingui/macro';


const Introduce: React.FC = () => {
  return (
    <section id="introduceContainer" className="componentContainer narrowHomeBox">
      <img src={require("../../images/introduce.png")} />
      <h2 className="componentTitle"><Trans>Mi is a Mesélő képek?</Trans></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </section>
  )
}

export default Introduce;
