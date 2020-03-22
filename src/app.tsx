import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header/header';
import {
  StickyContainer,
  Sticky
} from 'react-sticky';

import { I18nProvider } from '@lingui/react'
import catalogHu from './locales/hu/messages'

import Introduce from './components/home/introduce';
import HowWork from './components/home/how-work';
import Functions from './components/home/functions';
import Reviews from './components/home/reviews';
import Products from './components/home/products';
import Contact from './components/home/contact';

import Editor from './components/editor/editor';
import Order from './components/order/order';
import Profile from './components/home/Profile';
import Complete from './components/order/complete';

/**
 * TODO: dynamic language
 * https://lingui.js.org/tutorials/react.html
 * https://lingui.js.org/guides/dynamic-loading-catalogs.html#dynamic-loading-catalogs
*/
const catalogs = { hu: catalogHu };

/**
 * TODO: remove order route from it
 */
const App: React.FC = () => {
  return (
    <I18nProvider language="hu" catalogs={catalogs}>
      <StickyContainer>
        <Router>
          <Sticky>{({ style }) => <div style={{...style, zIndex: 9999}}><Header /></div>}</Sticky>
          <Switch>
            <Route path="/editor">
              <Editor />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <div id="homeContainer">
                <Introduce />
                <HowWork />
                <Functions />
                <Reviews />
                <Contact />
                <Products />
              </div>
            </Route>
          </Switch>
        </Router>
      </StickyContainer>
    </I18nProvider>
  );
};

export default App;
