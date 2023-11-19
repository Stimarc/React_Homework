import { CartProduct } from './components';
import styles from './Cart.module.css';

export const Cart = ({ cart, closeCart }) => {
  const { cart: cartStyle, header, main, footer, closeBtn } = styles;

  const calculateTotal = () => {
    if (cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    if (cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <div className={`${cartStyle} ${styles.cart}`}>
      <div className={header}>
        <h4>Products</h4>
        <button className={`${closeBtn} ${styles.red}`} onClick={closeCart}>
          &#10006;
        </button>
      </div>

      <div className={`${main} ${styles.cartItems}`}>
        {cart.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>

      <div className={footer}>
        <span>Total Quantity:</span>
        <span>{calculateTotalQuantity()}</span>
        <span>Total Cost:</span>
        <span>{calculateTotal()}</span>
      </div>
    </div>
  );
};