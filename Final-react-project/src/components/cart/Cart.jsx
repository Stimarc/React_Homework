import { CartHeader } from './CartHeader';
import { ProductDetails as CartProduct } from './ProductDetails';
import styles from './Cart.module.css';

export const Cart = ({ data, onIncrease, onDecrease, onRemove, }) => {
  const { cart, header, main, footer, } = styles;
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

  return (
    <div className={cart}>
      <CartHeader className={header} />

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

      <div className={footer}>
        <span>Total quntity: {calculateTotalQuantity()}</span>
        <span>Total: {calculateTotal()}</span>
      </div>
    </div>
  );
};

