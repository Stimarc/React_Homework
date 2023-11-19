import styles from './Cart.module.css';
import { CartProduct } from './components';

export const Cart = () => {
  const { cart, header, main, footer } = styles;

  return (
    <div className={ cart }>
      
      <div className={ header }>
        <h4>Products</h4>
      </div>

      <div className={ main }>

        <CartProduct />

      </div>

      <div className={ footer }>
        <span>total:</span>
        <span>20000</span>
      </div>
    </div>
  );
};