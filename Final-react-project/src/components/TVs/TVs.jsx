import React from 'react';
import { Products } from '../Products/Products';

export const TVs = ({ data, addToCartHandler }) => {
    const tvsData = data.filter(product => product.category === 'tvs');
    return  <div className="products tvs"><Products data={tvsData} addToCartHandler={addToCartHandler} /></div>
};