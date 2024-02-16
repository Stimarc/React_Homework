import { Img } from '../Img';
import s from './Product.module.css';

export const Product = ({ data, addToCartHandler }) => {
  const { id, title, price, img, detailUrl } = data; // Припускаю, що detailUrl - це URL для деталей продукту

  const clickHandler = (id) => {
    addToCartHandler(id);
  };

  const openDetailTab = (url) => {
    window.open(url, '_blank'); // Відкриває нову вкладку
  };

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
          Купити
        </button>
        <button
          onClick={() => openDetailTab(detailUrl)}
          className={ s.detailBtn } 
        >
          Деталі
        </button>
      </div>
    </div>
  );
};