import React, { useState } from 'react';
import './Singlepage.css';
import Card from '../card/Cards';

const Singlepage = () => {
    // Define cartItems state and functions
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        // Check if the product is already in the cart
        const productIndex = cartItems.findIndex((item) => item.id === product.id);

        if (productIndex === -1) {
            // If not in the cart, add it with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        } else {
            // If already in the cart, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[productIndex].quantity++;
            setCartItems(updatedCartItems);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = (productToRemove) => {
        const updatedCartItems = cartItems.filter((product) => product.id !== productToRemove.id);
        setCartItems(updatedCartItems);
    };

    // Function to update the quantity of a product in the cart
    const updateQuantity = (productId, newQuantity) => {
        const updatedCartItems = cartItems.map((product) =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );
        setCartItems(updatedCartItems);
    };

    // Sample product data (replace with your actual product data)
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h1>Your Shopping Cart</h1>
            <Card cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>

        
        
    );
};

export default Singlepage;
