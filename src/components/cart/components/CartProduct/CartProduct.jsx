import { Img } from '../../../commons';
import styles from './CartProduct.module.css';

export const CartProduct = ({item}) => {
  const { product,number,name,qty,price,cost } = styles;

  return (
    
    <div className={`${product}`}>
      <span className={`${number}`}>{item.quantity}</span>
      
      <Img imgName={item.img} />

      <p className={`${name}`}>{item.title}</p>
      <div className={`${qty}`}>
      <span>+</span>
      <span>1</span>
      <span>-</span>
      </div>
      <span className={`${price}`}>{item.price}</span>
      <span className={cost}>{(item.price * item.quantity)}</span>
    </div>
  );
};