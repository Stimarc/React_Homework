import { Product } from "../Product";

export const Products = ({ data ,addToCartHandler }) => {
    return (
        <div className="products">
        <h3>Products</h3>

        <div className="products__content">

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

