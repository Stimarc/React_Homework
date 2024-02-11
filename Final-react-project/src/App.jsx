import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Laptops } from './components/Laptops/Laptops';
import { Phones } from './components/Phones/Phones';
import { TVs } from './components/TVs/TVs';
import { Products } from './components/Products/Products';
import { CartBtn } from './components/CartBtn';
import { Logo } from './components/Logo';
import { Cart } from './components/Cart';
import { getCartObj, getCartProductQty } from './utils';


const App = () => {
  const products = [
    { id: 1, title: 'TCL 98C805', price: 285179, img: 'p1.webp',category: 'tvs' },
    { id: 2, title: 'Samsung QE98Q80CAUXUA', price: 269999, img: 'p2.webp',category: 'tvs' },
    { id: 3, title: 'Sony XR-77A80J', price: 142324, img: 'p3.webp',category: 'tvs' },
    { id: 4, title: 'Acer Aspire 7 ', price: 31999, img: 'n1.webp',category: 'laptops' },
    { id: 5, title: 'Apple MacBook Air 13"', price: 38499, img: 'n2.webp',category: 'laptops' },
    { id: 6, title: 'Lenovo IdeaPad Gaming 3', price: 31999, img: 'n3.webp',category: 'laptops' },
    { id: 7, title: 'Samsung Galaxy S24 Ultra 12/512GB', price: 57999, img: 's1.webp',category: 'phones' },
    { id: 8, title: 'Apple iPhone 15 Pro Max 256GB Black', price: 59999, img: 's2.webp',category: 'phones' },
    { id: 9, title: 'Google Pixel Fold 12/256GB Porcelain', price: 99670, img: 's3.webp',category: 'phones' },

  ];

  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState({});
  const [countCartItems, setCountCartItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (id) => {
    const product = products.find((prod) => prod.id === id);
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
    <Router>
        <div className="container">
            <div className="header">   <Link to="/">
                    <Logo />
                </Link>
                
                <Link to="/cart">
                    <CartBtn productsCount={countCartItems} onClick={() =>  setOpenCart((prev) => !prev)} />
                </Link>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={<Products data={products} addToCartHandler={addToCart} />}
                />
                <Route
                    path="/phones"
                    element={<Phones data={products} addToCartHandler={addToCart} />}
                />
                <Route
                    path="/laptops"
                    element={<Laptops data={products} addToCartHandler={addToCart} />}
                />
                <Route
                    path="/tvs"
                    element={<TVs data={products} addToCartHandler={addToCart} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            key={openCart}
                            data={cart}
                            totalCost={totalCost}
                            onRemove={removeFromCart}
                            onIncrease={increaseQty}
                            onDecrease={decreaseQty}
                        />
                    }
                />
            </Routes>

            <div className="footer">
            <h6>
            Copyright: &copy;StimShop&trade; - Kyiv, 2024
        </h6>
            </div>
        </div>
    </Router>
);

};

export default App;
