import React from 'react';

const Cart = ({ cart, closeCart }) => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
        <button onClick={closeCart}>Close Cart</button>
      </div>
    </div>
  );
};

export default Cart;