import React, { FC } from 'react'
import { CartItem, ICartItem } from '../'

const Cart: FC<{ cartItems: ICartItem[] }> = ({ cartItems }) => {
  return (
    <section>
      <div className=" w-4/5 mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 md:order-last">
            {/* <CartSummary /> */}
          </div>
          <div className="bg-white p-5 rounded-md md:col-span-2 md:order-first">
            <h3 className="uppercase border-b pb-3">
              Cart ({cartItems.length})
            </h3>

            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} />
            ))}
          </div>
        </div>
        {/* <CheckoutButtonLayout /> */}
      </div>
    </section>
  )
}

export default Cart
