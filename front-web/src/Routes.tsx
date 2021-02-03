import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './core/components/NavBar';

import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProdutDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products"exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProdutDetails />
      </Route>
      <Redirect from ="/admin" to="/admin/products" exact/>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>

);

export default Routes;