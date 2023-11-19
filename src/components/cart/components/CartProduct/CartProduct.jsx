import { Img } from '../../../commons';
import styles from './CartProduct.module.css';

export const CartProduct = () => {
  const { product } = styles;

  return (
    <div className={ product }>
      <span className="number">1</span>
      
      <Img imgName="p1.webp"/>

      <p className="productName">Product 1</p>
      <span className="qty">1</span>
      <span className="price">1000</span>
      <span className="cost">1000</span>
    </div>
  );
};