import { Img } from '../../Img';
import s from './ProductDetails.module.css';
import cs from './../CartCommon.module.css';

export const ProductDetails = ({ qty, product, cost, index, onIncrease, onDecrease, onRemove }) => {
  const { id, img, price, title } = product;

  return (
    <div
      className={s.product}
      
    >
      <span className={`${s.number} ${cs.mr1} ${cs.number}`}>{index + 1}</span>

      <div className={`${s.imgContainer} ${cs.mr1}`}>
        <Img imgName={img} className={`${cs.img}`} />
      </div>

      <p className={`${s.name} ${cs.mr1} ${cs.name}`}>{title}</p>

      <div className={`${s.qty} ${cs.mr1} ${cs.qty}`}>
        <button onClick={() => onIncrease(id)}>+</button>
        <span>{qty}</span>
        <button onClick={() => onDecrease(id)}>-</button>
      </div>

      <span className={`${s.price} ${cs.mr1} ${cs.price}`}>{price}</span>
      <span className={`${s.cost} ${cs.cost}`}>{cost}</span>

      <button className={`${s.removeBtn} ${cs.removeBtn}`} onClick={() => onRemove(id)}>
      
      </button>

    </div>
  );
};
