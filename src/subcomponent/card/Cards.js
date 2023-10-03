import React from 'react';
import './Card.css';

const Card = ({ cartItems, removeFromCart, updateQuantity }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product img</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product) => (
                        <tr key={product.id}>
                            {/* Display product image here */}
                            <td>
                                <img src={product.imgsrc} alt={product.name} sizes={"1rem"}/>
                            </td>
                            {/* Display product name here */}
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => {
                                        const newQuantity = parseInt(e.target.value, 10);
                                        updateQuantity(product.id, newQuantity);
                                    }}
                                />
                            </td>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(product)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Card;
