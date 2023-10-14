/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BarSettingsContextComponent from './context/BarSettings';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <BarSettingsContextComponent>
        <App />
      </BarSettingsContextComponent>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
