import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Itemlisting from './Itemlisting/Itemlisting'
import ItemList from './ItemList/ItemList'
import Home from './Home/Home'
import Tos from './Tos/Tos'
import Faq from './Faq/Faq'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kategorie?" element={<Itemlisting/>}/>
        <Route path="/polozka?" element={<ItemList/>}/>
        <Route path="/tos" element={<Tos/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
  </BrowserRouter>
);


reportWebVitals();
