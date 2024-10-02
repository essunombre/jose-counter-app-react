import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { MyFirstApp } from './MyFirstApp';
import { CounterApp } from './CounterApp';

// Here I am iporting styles
import './index.css';

// RAFC para crear un component template
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyFirstApp  age="{27}" /> */}
    <CounterApp value={ 9 } />
  </React.StrictMode>
);
