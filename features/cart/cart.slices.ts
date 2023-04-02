import { createSlice } from '@reduxjs/toolkit'
import {
  ICartInitialState,
  addToCartReducer,
  removeFromCartReducer,
} from './index'

const initialState = {
  cartItems: [],
} as ICartInitialState

export const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartReducer,
    removeFromCart: removeFromCartReducer,
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlices.actions

export default cartSlices.reducer
