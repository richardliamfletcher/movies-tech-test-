import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Movies from './Pages/Movies';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import TimeSeries from './Pages/TimeSeries';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export default function Application (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />}/>
          <Route path="timeSeries" element={<TimeSeries />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <Application />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
