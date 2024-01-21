const userReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { users: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;