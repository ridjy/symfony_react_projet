// ./src/js/app.js
    
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import Banner from './components/Banner';
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);