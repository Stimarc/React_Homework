import { Img } from '../../../commons';
import s from './CartProduct.module.css';
import cs from './../../components/CartCommon.module.css';

export const CartProduct = ({ qty, product, cost, index }) => {
  const { img, price, title } = product;

  return (
    <div className={ s.product }>
      <span className={`${s.number} ${cs.mr1} ${cs.number}`}>{ index + 1 }</span>
      
      <Img imgName={ img } className={ `${cs.mr1} ${cs.img}` }/>

      <p className={`${s.name} ${cs.mr1} ${cs.name}`}>{ title }</p>
      <div className={`${s.qty} ${cs.mr1} ${cs.qty}`}>
        <span>+</span>
        <span>{ qty }</span>
        <span>-</span>
      </div>
      <span className={`${s.price} ${cs.mr1} ${cs.price}`}>{ price }</span>
      <span className={`${s.cost} ${cs.cost}`}>{ cost }</span>
    </div>
  );
};