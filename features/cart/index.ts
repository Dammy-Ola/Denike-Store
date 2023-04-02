import { ICartInitialState, ICartItem } from './cart.interfaces'
import { addToCartReducer, removeFromCartReducer } from './cart.reducers'
import cartReducers, { addToCart, removeFromCart } from './cart.slices'

export type { ICartInitialState, ICartItem }
export { addToCartReducer, removeFromCartReducer }
export { cartReducers, addToCart, removeFromCart }
