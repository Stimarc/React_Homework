export const Product = ({ data, addToCartHandler }) => {
  const { id, title, price, img } = data;

  const clickHandler = () => {
    addToCartHandler(data);
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={process.env.PUBLIC_URL + `/img/products/${img}`} alt="" />
      </div>
      <h4 className="product__title">{title}</h4>
      <div className="product__price-block">
        <span className="product__price">{price}</span>

        <button onClick={clickHandler} className="product__buy">
          buy
        </button>
      </div>
    </div>
  );
};