import React from 'react';
import { render } from 'react-dom';
import HomePage from './pages/home/HomePage';

const root = document.getElementById('root');

function renderApp() {
  render(<HomePage />, root);
}

renderApp();
if (module.hot) {
  module.hot.accept(renderApp);
}
