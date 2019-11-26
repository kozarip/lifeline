import React from 'react'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <p>Introduce yourself</p>
      <button><Link to='editor'>Create your lifeline</Link></button>
    </div>
  )
}

export default Home;
