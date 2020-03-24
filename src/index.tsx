import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '20px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      // @ts-ignore
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </AlertProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
