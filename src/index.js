import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBeer from './Components/AllBeer';
import Info from './Components/Info';
import Nav from './Components/Nav';
import Random from './Components/Random';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/AllBeer' element={<AllBeer />} />
        <Route path='/Info/:_id' element={<Info />} />
        <Route path='/Random' element={<Random />} />
        <Route path='/Nav' element={<Nav />} />

      </Routes>
    </React.StrictMode>
  </BrowserRouter >,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
