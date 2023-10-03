// Singlepage.js
import React from 'react';
import Pmg from '../image/Pmg';
import './Singlepage.css';
import Hirebutton from '../button/Hirebutton';
import db from '../image/database';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Image from '../image/Image';
import Card from '../card/Card';


const Singlepage = () => {
  const { imgid } = useParams();


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
              <Hirebutton text="Add to Cart" onClick={addToCart} />
            </div>

          </div>
        </div>
      </div>

      <Card cartItems={cartItems} />


      <Image />
    </div>
  );
};

export default Singlepage;
