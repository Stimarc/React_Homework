import { Product } from "../Product";
import styles from "./Products.module.css";

export const Products = ({ data, addToCartHandler }) => {
  const { products, content } = styles;

  return (
    <div className={ products }>
      <h3>Products</h3>

      <div className={ content }>

        {
          data.map(product => (
            <Product
              key={ product.id } 
              data={ product }
              addToCartHandler={ addToCartHandler }
            />
          ))
        }
        
      </div>

    </div>
  );
};
