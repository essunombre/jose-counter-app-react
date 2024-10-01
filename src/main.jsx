import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { MyFirstApp } from './MyFirstApp';

// Here I am iporting styles
import './index.css'

// RAFC para crear un component template
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyFirstApp title="Hola, soy Jose" subtitle="Edad" age="{27}" />
  </React.StrictMode>
);
