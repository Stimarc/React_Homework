import React from 'react';
import { Products } from '../Products/Products';

export const Phones = ({ data, addToCartHandler }) => {
    const phonesData = data.filter(product => product.category === 'phones');
    return <Products data={phonesData} addToCartHandler={addToCartHandler} />;
};