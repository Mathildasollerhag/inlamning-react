import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import LandingPage from './views/LandingPage';
import ProductDeck from './views/product/ProductDeck';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyPage from './views/MyPage';
import About from './views/About';
import ProductDetails from './components/product/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/products" component={ProductDeck} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/about" component={About} />
     

      </Switch>
      
      
    </BrowserRouter>
  );
}

export default App;
