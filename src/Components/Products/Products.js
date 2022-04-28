import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Products = (props) => {
    const {name, price, img, seller, stock} = props.product;

    return (
        <div className='product-template'>
            <img src={img} alt="Product Images" />
            <div className="product-details">
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <br></br>
                <h4>${price}</h4>
                <p><small>Only {stock} left - Order Soon</small></p>
                <button 
                onClick={() => props.handleAddToCart(props.product)}
                className='purchase-btn'><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>  
            </div>
        </div>
    );
};

export default Products;