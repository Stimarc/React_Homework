import { CartHeader } from './CartHeader';
import { ProductDetails as CartProduct } from './ProductDetails';
import styles from './Cart.module.css';
import { useState } from 'react';

export const Cart = ({ data, onIncrease, onDecrease, onRemove, }) => {
  const { cart, header, main, footercart, } = styles;
  const [isCartOpen, setIsCartOpen] = useState(true);
  const products = Object.values(data);

  const calculateTotal = () => {
    if (products.length === 0) {
      return 0;
    }

    return products.reduce((total, { qty, product }) => total + product.price * qty, 0);
  };

  const calculateTotalQuantity = () => {
    if (products.length === 0) {
      return 0;
    }

    return products.reduce((total, { qty }) => total + qty, 0);
  };

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className={cart}>
      <CartHeader className={header} setIsCartOpen={setIsCartOpen} />

      <div className={main}>
        {products.map(({ qty, product, cost }, index) => (
          <CartProduct
            key={product.id}
            qty={qty}
            product={product}
            cost={cost}
            index={index}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className={footercart}>
        <span>Total quntity: {calculateTotalQuantity()}</span>
        <span>Total: {calculateTotal()}</span>
      </div>
    </div>
  );
};

