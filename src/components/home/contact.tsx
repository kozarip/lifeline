import React from 'react'

const Contact: React.FC = () => {
  return (
    <div id="contactContainer"
      className="componentContainer">
      <h2 className="componentTitle">Lépj velünk kapcsolatba!</h2>
      <p className="narrowHomeBox" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <form>
        <input className="narrowHomeBox textBox"  type="text" name="name" placeholder="Neved" />
        <input className="narrowHomeBox textBox"  type="email" name="email" placeholder="Email címed" />
        <textarea className="narrowHomeBox" placeholder="Üzenet" rows={14}></textarea>
        <input className="btn" type="submit" value="Üzenet elküldése" />
      </form>
      <h3 className="socialBoxTitle">A közösségi oldalakon is megtalálsz minket!</h3>
      <div className="socialBox">
        <a href="#"><img src={require("../../images/bg_fb.png")} /></a>
        <a href="#"><img src={require("../../images/bg_fb.png")} /></a>
      </div>
    </div>
  )
}

export default Contact;
