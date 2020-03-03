import React from 'react';

const Logo: React.FC = () => {
  return (
    <a className="logo" href="/">
      <img src={require('../../images/logo.png')} title="Mesélő képek" />
    </a>
  )
}

export default Logo;
