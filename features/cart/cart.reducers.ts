import { WritableDraft } from 'immer/dist/internal'
import { ICartInitialState, ICartItem } from './index'
import { PayloadAction } from '@reduxjs/toolkit'

export const addToCartReducer = (
  state: WritableDraft<ICartInitialState>,
  { payload }: PayloadAction<ICartItem>
) => {
  const cartItem = state.cartItems.find((item) => item.id === payload.id)

  if (cartItem) {
    cartItem.qty++
    cartItem.price += payload.price
  } else {
    state.cartItems.push(payload)
  }
}

export const removeFromCartReducer = (
  state: WritableDraft<ICartInitialState>,
  { payload }: PayloadAction<ICartItem>
) => {
  const cartItem = state.cartItems.find((item) => item.id === payload.id)

  if (cartItem && cartItem.qty > 1) {
    cartItem.qty--
    cartItem.price -= payload.price
  }

  if (cartItem && cartItem.qty === 1) {
    state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
  }
}
