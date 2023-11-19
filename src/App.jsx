import { useState } from 'react';
import { Products } from './components/Products';
import { CartBtn, Logo } from './components/commons';
import { Cart } from './components/cart';

const App = () => {

  const products = [
    {id: 1, title: 'Product 1', price: 10890, img: 'p1.webp'},
    {id: 2, title: 'Product 2', price: 15720, img: 'p2.webp'},
    {id: 3, title: 'Product 3', price: 9876, img: 'p3.webp'},
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  }

  console.log(cart);

  return (
    <div className="container">

      <div className="header">
        <Logo />
        <CartBtn productsCount={ cart.length }/>
      </div>

      <div className="main">
      
        <Products data={ products } addToCartHandler={ addToCart }/>

      </div>
      <div className="footer"></div>

      <Cart />
    </div>
  );
}

export default App;
