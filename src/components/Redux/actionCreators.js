import { ADD_TO_CART, REMOVE_TO_CART } from "./actions"

const addToCart = course => ({
  type: ADD_TO_CART,
  data: course
})

const removeToCart = course => ({
  type: REMOVE_TO_CART,
  data: course
})

export { addToCart, removeToCart }
