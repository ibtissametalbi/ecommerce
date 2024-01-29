import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/ProductDetail/:id" component={ProductDetail} />
          <Route path="/Cart" component={Cart} />
        </Switch>
        <Total />
      </div>
    </Router>
  );
}

export default App;
