import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

const howWork: React.FC = () => {
  return (
    <Element name="howWork" className="homeBox">
      <h2 className="boxTitle">Hogyan működik?</h2>
      <div className="workStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle">
            <img src={require("../../images/step1.png")} />
          </div>
          <div className="stepContent">
            <h3>1. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer whiteWorkStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle">
            <img src={require("../../images/step2.png")} />
          </div>
          <div className="stepContent">
            <h3>2. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle">
            <img src={require("../../images/step3.png")} />
          </div>
          <div className="stepContent">
            <h3>3. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer whiteWorkStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle">
            <img src={require("../../images/step4.png")} />
          </div>
          <div className="stepContent">
            <h3>4. Lépés</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
      <Link to="/editor" className="btn">start</Link>
    </Element>
  )
}

export default howWork;
