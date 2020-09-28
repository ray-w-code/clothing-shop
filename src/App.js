import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component'

import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route spath="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
