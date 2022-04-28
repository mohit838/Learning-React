import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    
    for(const products of cart){
        total = total + products.price;
    }

    return (
        <div>
            <div className="cart-summary">
                <h1>Order Summary</h1>
                <h3>Order Items: {props.cart.length}</h3>   
            </div>
            <div className="calculation">
                <h3>Total: ${total}</h3>
                <h3>Shipping: ${total}</h3>
                <h3>Tax: ${total}</h3>
                <h3>Grand Total: ${total}</h3>
            </div>
        </div>
    );
};

export default Cart;