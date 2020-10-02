import { createStore } from "redux";

const initialStore = {
  cart: []
};

const rootReducer = (state = initialStore, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.find(a => a === action.data)) return state
      return {
        ...state,
        cart: [...state.cart, action.data]
      };

    case 'REMOVE_TO_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.data.id
      )
      let newCart = [...state.cart]
      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in Cart!`)
      }
      return {
        ...state,
        cart: newCart
      };

    default:
      return state;
  }
};

export default createStore(rootReducer);
