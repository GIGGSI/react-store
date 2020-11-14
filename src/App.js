import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  return <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/about' component={About} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/login" component={Login} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="*" component={Error} />
    </Switch>
    <Footer />
  </Router>
}
