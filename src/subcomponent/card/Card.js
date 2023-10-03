import React from 'react';
import './Card.css';

const Card = ({ cartItems, removeFromCart, updateQuantity }) => {
    return (
        <div>
            <section>
                <header>
                    <h1>Your Shopping Cart</h1>
                </header>

                <main>
                    <table>
                        <thead>
                            {/* Table headers */}
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table rows */}
                            {cartItems.map((product, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={product.imgsrc} alt={product.name}/>
                                    {product.title} 
                                       {/* <span className='title'>{product.title} </span>  */}
                                    </td>
                                
                
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={product.quantity}
                                            onChange={(e) => {
                                                const newQuantity = parseInt(e.target.value, 10);
                                                updateQuantity(index, newQuantity);
                                            }}
                                        />
                                    </td>
                                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                                    <td>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeFromCart(product)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            {/* Table footer */}
                        </tfoot>
                    </table>
                </main>

                <footer>
                    <button className="checkout-button">Checkout</button>
                </footer>
            </section>
        </div>
    );
};

export default Card;
