import React, { useState } from 'react';
import './App.css';
import { Products } from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const products = [
    { id: 1, title: 'Product 1', price: 10890, img: 'p1.webp' },
    { id: 2, title: 'Product 2', price: 15720, img: 'p2.webp' },
    { id: 3, title: 'Product 3', price: 9876, img: 'p3.webp' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">SUPER SHOP</div>
        <div className="cart" onClick={openCart}>
          {cart.length}
        </div>
      </div>
      <div className="main">
        <Products data={products} addToCartHandler={addToCart} />
      </div>

      {isCartOpen && <Cart cart={cart} closeCart={closeCart} />}

      <div className="footer"></div>
    </div>
  );
};

export default App;