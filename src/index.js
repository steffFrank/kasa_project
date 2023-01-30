import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/reset.module.scss';
import App from './App';
import { AppartmentProvider } from './context/appartment.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppartmentProvider>
      <App />
    </AppartmentProvider>
  </React.StrictMode>
);
