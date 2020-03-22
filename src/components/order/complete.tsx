import React from 'react'
import { printDocument } from 'utils/print';

const Complete: React.FC = () => {
  return (
    <section id="completeContainer" className="wideHomeBox">
      <h3>Megrendelésed sikeres! Köszönjük a vásárlást</h3>
      <button
        id="print"
        className="btn smallBtn"
        /* style={{ display: 'none' }} */
        onClick={printDocument}>Nyomtatás (teszt)</button>
    </section>
  )
}

export default Complete;
