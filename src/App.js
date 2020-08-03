import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Topmenu from "./components/topmenu";
import Products from "./components/products";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topmenu>

        </Topmenu>
      </div>
    

      <Switch>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
);
}

function Home() {
return <h2>Home</h2>;
}

function Product() {
return <Products></Products>;
}

export default App;
