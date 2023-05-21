import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PortfolioProvider from './Context/Site.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioProvider>
    <App />
    </PortfolioProvider>
  </React.StrictMode>
);

