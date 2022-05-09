import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";

import { BasketContextProvider } from './contexts/BasketContext';
import { FiltersContextProvider } from './contexts/FiltersContext';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
  <Router>
    <FiltersContextProvider>
        <BasketContextProvider>
        <React.StrictMode>
          <App />
          </React.StrictMode>
        </BasketContextProvider>
    </FiltersContextProvider>
  </Router>
  
);
