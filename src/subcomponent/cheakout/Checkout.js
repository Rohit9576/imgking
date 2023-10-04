import React from 'react'

const Checkout = () => {
  return (
    <div>
    {/* Pass cartItems, removeFromCart, and updateQuantity as props to the Card component */}
    <Card cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  )
}

export default Checkout