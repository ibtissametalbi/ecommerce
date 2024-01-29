import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Accueil from './components/Accueil';
import Cart from './components/Cart';

function App() {
  return (
        <>
        <Routes>
          <Route path="/" exact element={<Accueil/>}/>
          <Route path="/ProductDetail/:id" element={<ProductDetail/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
        </>
  );
}

export default App;
