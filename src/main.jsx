import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // Ensure this file exists if imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
