import { useState } from 'react';
import { Products } from './components/Products';
import { CartBtn, Logo } from './components/commons';
import { Cart } from './components/cart';

const App = () => {
  const products = [
    { id: 1, title: 'Ergo', price: 10890, img: 'p1.webp' },
    { id: 2, title: 'Nokia', price: 15720, img: 'p2.webp' },
    { id: 3, title: 'Samsung', price: 9876, img: 'p3.webp' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1, price: parseFloat(product.price)  }]);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Logo />
        <CartBtn productsCount={cart.length} onClick={openCart} />
      </div>

      <div className="main">
        <Products data={products} addToCartHandler={addToCart} />
      </div>

      <div className="footer"></div>

      {isCartOpen && <Cart cart={cart} closeCart={closeCart} />}
    </div>
  );
};

export default App;