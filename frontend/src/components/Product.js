import React from 'react'
import Rating from './Rating'


function Product(props) {

    const { product} = props
    return (
            <div class="card">
            <a href={`/product/${product._id}`}><img class="medium" src={product.image} alt={product.name}/> </a>
            <div class="card-body">
                <a href={`/product/${product._id}`}> <h2>{product.name}</h2></a> 
                <div class="price"> {product.price}FCFA </div>
                <Rating  rating ={product.rating} numReviews={product.numReviews} />
            </div>
            </div>
        
    );
}

export default Product
