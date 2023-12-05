import { Img } from '../commons';
import s from './Product.module.css';

export const Product = ({ data, addToCartHandler }) => {
  const { id, title, price, img } = data;

  const clickHandler = (id) => {
    addToCartHandler(id);
  }

  return (
    <div className={ s.product }>
      
      <Img imgName={ img } className={ s.thumbnail }/>

      <h4 className={ s.title }>{ title }</h4>
      <div className={ s.priceBlock }>
        <span className={ s.price }>{ price }</span>

        <button
          onClick={() => clickHandler(id)} 
          className={ s.buyBtn }
        >
          buy
        </button>

      </div>
    </div>
  );
};
