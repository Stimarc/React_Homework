import { CartProduct } from './components';
import styles from './Cart.module.css';
import commonStyles from './components/CartCommon.module.css'

export const Cart = ({ cart, closeCart }) => {
  const { cart: cartStyle, header, main, footer, closeBtn } = styles;
  const { number, img, name, qty, price, cost } = commonStyles;

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
      <div>
      <span className={`${number} `}>№</span>
      <span className={`${img} `}>Фото</span>
      <span className={`${name}`}>Назва</span>
      <span className={`${qty}`}>К-сть</span>
      <span className={`${price}`}>Ціна</span>
      <span className={`${cost}`}>Вартість</span>
    </div>
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
