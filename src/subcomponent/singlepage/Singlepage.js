// Singlepage.js
import React, { useState } from 'react';
import Pmg from '../image/Pmg';
import './Singlepage.css';
import Hirebutton from '../button/Hirebutton';
import db from '../image/database';
import { useParams } from 'react-router-dom';
import Card from '../card/Card'; // Import the Card component
import Image from '../image/Image';

const Singlepage = () => {
  const { imgid } = useParams();

  // Define cartItems state and functions
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = () => {
    const productToAdd = db.products[imgid];
    // Check if the product is already in the cart
    const productIndex = cartItems.findIndex((item) => item.id === productToAdd.id);

    if (productIndex === -1) {
      // If not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
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

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div className='container'>
        <div className='container-item'>
          <div className='img-size'>
            <Pmg img={db.products[imgid].imgsrc} price={db.products[imgid].price} icon={db.products[imgid].icon} size={"25rem"} />
          </div>
          <div className='container-item-right'>
            <div className='right-item'>
              <div className='item-name'><h1>{db.products[imgid].title}</h1></div>
              <div><h3>Price = ₹ {db.products[imgid].price}</h3></div>
              <div className='item-des'>
                {db.products[imgid].desc}
              </div>
            </div>
            <div className='right-button'>
              {/* Pass the addToCart function as a callback to Hirebutton */}
              <Hirebutton text="Add to Cart" onClick={addToCart} />
              {totalQuantity}
            </div>
          </div>
        </div>
      </div>

      {/* Pass cartItems, removeFromCart, and updateQuantity as props to the Card component */}
      <Card cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />

      

      {/* Render the Image component if needed */}
      <Image />
    </div>
  );
};

export default Singlepage;
