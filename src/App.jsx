import React, { useState, useEffect } from 'react';
import { Products } from './components/Products';
import { CartBtn, Logo } from './components/commons';
import { Cart } from './components/cart';
import { getCartObj, getCartProductQty } from './utils';

const App = () => {
  const products = [
    { id: 1, title: 'Ergo', price: 10890, img: 'p1.webp' },
    { id: 2, title: 'Nokia', price: 15720, img: 'p2.webp' },
    { id: 3, title: 'Samsung', price: 9876, img: 'p3.webp' },
  ];

  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState({});
  const [countCartItems, setCountCartItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (id) => {
    const product = products.find(prod => prod.id === id);
    let cartObj = !cart[id]
      ? getCartObj(id, cart, 0, product)
      : getCartObj(id, cart, cart[id].qty, product);

    setCart(cartObj);
  };

  const removeFromCart = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = { ...cart };
    updatedCart[id].qty += 1;
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = { ...cart };
    if (updatedCart[id].qty > 1) {
      updatedCart[id].qty -= 1;
    }
    setCart(updatedCart);
  };

  useEffect(() => {
    const updatedTotalCost = Object.values(cart).reduce(
      (total, { qty, product }) => total + qty * product.price,
      0
    );

    const updatedCount = getCartProductQty(cart);

    setTotalCost(updatedTotalCost);
    setCountCartItems(updatedCount);
  }, [cart]);

  return (
    <div className="container">
      <div className="header">
        <Logo />
        <CartBtn productsCount={countCartItems} onClick={() => setOpenCart(prev => !prev)} />
      </div>

      <div className="main">
        <Products data={products} addToCartHandler={addToCart} />
      </div>

      <div className="footer"></div>

      {openCart && (
        <Cart
          data={cart}
          totalCost={totalCost}
          onRemove={removeFromCart}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
        />
      )}
    </div>
  );
};

export default App;
