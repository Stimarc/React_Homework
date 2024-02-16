import { NavLink } from "react-router-dom";
import { Product } from "../Product";
import styles from "./Products.module.css";

export const Products = ({ data, addToCartHandler }) => {
  const { products, content, nav } = styles;

  return (
    <div className={products}>
      <h3 className={styles.title}>Products</h3>
      <nav className={nav}>
        <NavLink to="/phones" activeclassname={styles.activeLink}>Phones</NavLink>
        <NavLink to="/laptops" activeclassname={styles.activeLink}>Laptops</NavLink>
        <NavLink to="/tvs" activeclassname={styles.activeLink}>TVs</NavLink>
      </nav>

      <div className={content}>
        {data.map(product => (
          <Product
            key={product.id}
            data={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};
