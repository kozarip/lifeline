import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import ThemeSelector from './theme-selector';
import PreView from './preview';
import Toolbar from './toolbar';
import Order from 'components/order/order';
import Complete from 'components/order/complete';

const Editor: React.FC = () => {
  window.onbeforeunload = function() {
    return true;
  };

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/editor/editor">
            <section id="mainEditorContainer">
              <PreView />
              <Toolbar />
            </section>
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route path={['/', '/editor/themeselector']}>
            <ThemeSelector />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default Editor;
