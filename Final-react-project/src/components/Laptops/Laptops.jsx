import React from 'react';
import { Products } from '../Products/Products';

export const Laptops = ({ data, addToCartHandler }) => {
    const laptopsData = data.filter(product => product.category === 'laptops');
    return <Products data={laptopsData} addToCartHandler={addToCartHandler} />;
};