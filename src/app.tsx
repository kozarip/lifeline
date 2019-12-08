import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header/header';

import Introduce from './components/home/introduce';
import HowWork from './components/home/how-work';
import Functions from './components/home/functions';
import Reviews from './components/home/reviews';
import Prices from './components/home/prices';
import Contact from './components/home/contact';

import Editor from './components/editor/editor';
import './app.css';

const App: React.FC = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/">
          <div id="homeContainer">
            <Introduce />
            <HowWork />
            <Functions />
            <Reviews />
            <Prices />
            <Contact />
            </div>
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
