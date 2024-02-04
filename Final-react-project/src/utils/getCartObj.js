export const getCartObj = (id, cart, prevCount, product) => {
    return {
      ...cart, 
      [id]: {
        qty: prevCount + 1,
        product,
        cost: (prevCount + 1) * product.price,
      } 
    };
  }