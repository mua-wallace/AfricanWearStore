import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'


function Product(props) {

    const { product} = props
    return (
            <div class="card">
            <Link to={`/product/${product._id}`}><img class="medium" src={product.image} alt={product.name}/> </Link>
            <div class="card-body">
                <Link to={`/product/${product._id}`}> <h2>{product.name}</h2></Link> 
                <div class="price"> {product.price}FCFA </div>
                <Rating  rating ={product.rating} numReviews={product.numReviews} />
            </div>
            </div>
        
    );
}

export default Product
