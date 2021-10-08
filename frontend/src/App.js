import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
 
 



function App() {
  const cart =useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
        <div class="grid-container">
        <header  class="row">
            <div><Link class="brand" to="/">AFRICAN-Wears</Link></div>
            <div>
                <Link to="/Cart">
                  Cart
                 { cartItems.length >0 && (
                   <span className="badge">{ cartItems.length}</span>
                 )}
                 </Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <main>
            <Route path="/cart/:id?" component={CartScreen} ></Route>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route path='/' component={HomeScreen}  exact ></Route>
        </main>
        <footer class="row center"> All rights reserved</footer>
        </div> 
    </BrowserRouter>
  );
}

export default App;
