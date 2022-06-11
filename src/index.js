import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {GlobalStyles} from "./global-styles"
import 'normalize.css';


render(
  <>
   <React.StrictMode>
      <GlobalStyles />
      <App />
  </React.StrictMode>,
  </>,
  document.getElementById('root')
);

