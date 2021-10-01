import React from 'react'
import Product from './components/Product';
import data from './data'



function App() {
  return (
    <div class="grid-container">
    <header  class="row">
        <div><a class="brand" href="/">AFRICAN-Wears</a></div>
        <div>
            <a href="/Cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
        <div>
        <div class="row center">
        {
            data.products.map( (product) =>{
                return (
                    <data />,
                    <Product key={product._id} product= {product}   />
                )
               })
        }
    </div>
        </div>
    </main>
    <footer class="row center"> All rights reserved</footer>
    </div> 
  );
}

export default App;
