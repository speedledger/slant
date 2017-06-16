import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
let App = require('./App').default;

const createApp = () => (
  <AppContainer>
    <App />
  </AppContainer>
);
const mountNode = window.document.getElementById('root');

render(createApp(), mountNode);

if (module.hot) {
  module.hot.accept('./App', () => {
    App = require('./App').default;
    render(createApp(), mountNode);
  });
}
