import { Cart } from '@/features/cart'
import { useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import React from 'react'

const CartPage: NextPage = () => {
  const { cartItems } = useAppSelector((state) => state.cart)
  return <Cart cartItems={cartItems} />
}

export default CartPage
