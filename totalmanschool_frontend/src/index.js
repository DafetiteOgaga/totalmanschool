import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import "./icons";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { DeviceProvider } from './context/deviceTypeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isGitHubPages = window.location.hostname.includes('github.io');
const RouterToUse = isGitHubPages ? HashRouter : BrowserRouter;
root.render(
  // <React.StrictMode>
    <DeviceProvider>
      <RouterToUse>
        <App />
      </RouterToUse>
    </DeviceProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
