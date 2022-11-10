// ./src/js/app.js
    
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import Test from './components/Test';
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);