import { Img } from '../../../commons';
import styles from './CartProduct.module.css';

export const CartProduct = ({ item }) => {
  const { product } = styles;

  return (
    <div className={`${product} ${styles.product}`}>
      <span className="number">{item.quantity}</span>
      
      <Img imgName={item.img} />

      <p className="productName">{item.title}</p>
      <span className="qty">{item.quantity}</span>
      <span className="price">{item.price.toLocaleString()}</span>
      <span className="cost">{(item.price * item.quantity).toLocaleString()}</span>
    </div>
  );
};