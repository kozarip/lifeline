import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ThemeSelector from './theme-selector';
import PreView from './preview';
import Toolbar from './toolbar';

const Editor: React.FC = () => {
  return (
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
  )
}

export default Editor;
