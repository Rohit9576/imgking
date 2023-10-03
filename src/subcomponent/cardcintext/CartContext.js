import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    const productIndex = cartItems.findIndex((item) => item.id === productToAdd.id);

    if (productIndex === -1) {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity++;
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter((product) => product.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartItems(updatedCartItems);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
