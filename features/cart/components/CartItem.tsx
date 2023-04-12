import React, { FC } from 'react'
import { ICartItem } from '../'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Image from 'next/image'

const CartItem: FC<{ cartItem: ICartItem }> = ({
  cartItem: { id, img, name, price, qty },
}) => {
  return (
    <div className="border-b py-5">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
        <div className="col-span-1">
          <Image src={img} height={100} width={100} alt="Sample product shoe" />
        </div>
        <div className="col-span-2 md:col-span-3">
          <h3 className="">{name}</h3>
          <h3 className="md:hidden font-bold">
            Ghc {(Number(price) / 100).toFixed(2)}
          </h3>
          <small className="text-red-500">8 units left</small>
        </div>
        <div className="hidden md:block md:col-span-1">
          <h3 className="font-bold">Ghc {(Number(price) / 100).toFixed(2)}</h3>
          <div className="flex justify-between items-center">
            <h3 className="line-through">Ghc 150</h3>
            <h3 className="bg-green-400 text-xs p-1 rounded-md">-15%</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <div className="text-red-500 uppercase flex">
          <MdOutlineDeleteOutline className="text-2xl" />
          <span>Remove</span>
        </div>
        <div className="flex justify-between items-center w-5/12 md:w-3/12">
          <span className="bg-green-600 text-center text-white font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
            -
          </span>
          <span>1</span>
          <span className="bg-green-600 text-center text-white font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
            +
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
