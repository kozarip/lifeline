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

const Editor: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/editor/editor" exact>
            <section id="mainEditorContainer">
              <PreView />
              <Toolbar />
            </section>
          </Route>
          <Route path={["/", "/editor/themeselector"]}>
            <ThemeSelector />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default Editor;
