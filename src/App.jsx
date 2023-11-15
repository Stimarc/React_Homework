import { useState } from 'react';
import './App.css';
import { Products } from './components/Products';


const App = () => {

  const products = [
   {id:1,title:"Product 1",price:10890,img:"p1.webp"},
   {id:1,title:"Product 1",price:15720,img:"p2.webp"},
   {id:1,title:"Product 1",price:9876,img:"p3.webp"},
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
   setCart([...cart,id]);
  }

 return (
  <div className='App'>
   <div className="header">
     <div className="logo">SUPER SHOP</div>
     <div className="cart">{ cart.length }</div>
   </div>
   <div className="main">

     <Products data={products} addToCartHandler={ addToCart } />

   </div>


   <div className="footer"></div>
  </div>
 );
}

export default App;
