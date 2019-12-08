import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

const howWork: React.FC = () => {
  return (
    <Element name="howWork" className="homeBox">
      <h2 className="boxTitle">Hogy működik?</h2>
      <div className="workStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle"></div>
          <div className="stepContent">
            <h3>1. lépés</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer whiteWorkStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle"></div>
          <div className="stepContent">
            <h3>2. lépés</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle"></div>
          <div className="stepContent">
            <h3>3. lépés</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</p>
          </div>
        </div>
      </div>
      <div className="workStepContainer whiteWorkStepContainer">
        <div className="workStep wideHomeBox">
          <div className="circle"></div>
          <div className="stepContent">
            <h3>4. lépés</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</p>
          </div>
        </div>
      </div>
      <Link to="/editor" className="start">start</Link>
    </Element>
  )
}

export default howWork;
