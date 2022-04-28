import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
        setProducts(data);
        // console.log('Multi-line possible');
        })
    },[]);
    
    //Local data to UI
    useEffect(() => {
        if (products.length){
            const saveCart = getStoredCart();
            const storeCart = [];
            for(const id in saveCart){
                const addProducts = products.find(product => product.id === id)
                if (addProducts){
                    const quantity = saveCart[id];
                    addProducts.quantity = quantity;
                    storeCart.push(addProducts);
                }
            }
            
            setCart(storeCart);
        }
        
    },[products])
    
    const handleAddToCart = (product) =>{
        // const newCart = [...cart, product];
        // setCart(newCart);

        // //Save to local storage
        // addToDb(product.id);
        const exists = cart.find(pd => pd.id === product.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.id);
    }

    return (
        <div className='all-products'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;