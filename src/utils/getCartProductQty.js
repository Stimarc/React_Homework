export const getCartProductQty = (cartObj) => {
    const countsArr = Object.values(cartObj);
    const count = countsArr.reduce((total, item) => total + item.qty, 0);
  
    return count;
  }