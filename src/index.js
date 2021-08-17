import React from 'react';
import App from './components/app/App';
import { initialState, reducer } from './state/reducer';
import { ReduxProvider } from './state/ReduxProvider';
import { render } from 'react-dom';

render(
  <ReduxProvider reducer={reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
