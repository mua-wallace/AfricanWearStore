import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/registerScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart =useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const  dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
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
                 {
                   userInfo ? (
                     <div className="dropdown">
                     <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                     <ul className="dropdown-content">
                     <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                     </ul>
                     </div>
                   ) :
                   (
                    <Link to="/signin">Sign In</Link>
                   )
                 }
                
            </div>
        </header>
        <main>
            <Route path="/cart/:id?" component={CartScreen} ></Route>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route path="/signin" component={SigninScreen} ></Route>
            <Route path="/register" component={RegisterScreen} ></Route>
            <Route path="/shipping" component={ShippingAddressScreen} ></Route>
            <Route path="/payment" component={PaymentMethodScreen} ></Route>
            <Route path='/' component={HomeScreen}  exact ></Route>
        </main>
        <footer class="row center"> All rights reserved</footer>
        </div> 
    </BrowserRouter> 
  );
}
 
export default App;
  