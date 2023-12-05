import styles from './Cart.module.css';
import { CartHeader, CartProduct } from './components';

export const Cart = ({ data }) => {
  const { cart, header, main, footer } = styles;
  const products = Object.values(data);

  console.log(products);

  return (
    <div className={ cart }>
      
      <CartHeader className={ header } />

      <div className={ main }>

        {
          products.map(({ qty, product, cost }, index) => (
            <CartProduct 
              key={ product.id }
              qty={ qty } 
              product={ product }
              cost={ cost }
              index={ index }
            />
          ))
        }
        

      </div>

      <div className={ footer }>
        <span>total:</span>
        <span>20000</span>
      </div>
    </div>
  );
};

// const calculateTotal = () => {
  //   if (products.length === 0) {
  //     return 0;
  //   }

  //   return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  // };

  // const calculateTotalQuantity = () => {
  //   if (cart.length === 0) {
  //     return 0;
  //   }

  //   return cart.reduce((total, product) => total + product.quantity, 0);
  // };