import React from 'react'
import { Link } from 'react-router-dom'

const howWork: React.FC = () => {
  return (
    <section id="howWorkContainer"
      className="componentContainer">
      <h2 className="componentTitle">Hogyan működik?</h2>
      <div className="howWorkStepContainer">
        <div className="howWorkStep wideHomeBox">
          <div className="circle">
            <img src={require('../../images/step1.png')} />
          </div>
          <div className="stepContent">
            <h3>1. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="howWorkStepContainer whiteWorkStepContainer">
        <div className="howWorkStep wideHomeBox">
          <div className="circle">
            <img src={require('../../images/step2.png')} />
          </div>
          <div className="stepContent">
            <h3>2. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="howWorkStepContainer">
        <div className="howWorkStep wideHomeBox">
          <div className="circle">
            <img src={require('../../images/step3.png')} />
          </div>
          <div className="stepContent">
            <h3>3. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="howWorkStepContainer whiteWorkStepContainer">
        <div className="howWorkStep wideHomeBox">
          <div className="circle">
            <img src={require('../../images/step4.png')} />
          </div>
          <div className="stepContent">
            <h3>4. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <Link to="/editor" className="btn">start</Link>
    </section>
  )
}

export default howWork;
