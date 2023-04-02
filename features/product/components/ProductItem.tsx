import Link from 'next/link'
import React, { FC } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { IProduct } from '../index'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { addToCart, removeFromCart } from '@/features/cart'

const ProductItem: FC<{ product: IProduct }> = ({
  product: {
    id,
    attributes: { name, discountedPrice, actualPrice, featuredImage, slug },
  },
}) => {
  const dispatch = useAppDispatch()

  const { cartItems } = useAppSelector((state) => state.cart)

  const cartItem = cartItems.filter((item) => item.id === id)

  const item = {
    id,
    name,
    price: Number(discountedPrice),
    qty: 1,
    img: featuredImage ? featuredImage.data.attributes.url : '',
  }

  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className="bg-white hover:shadow-2xl relative rounded-md">
      <Image
        alt="tt"
        src={featuredImage ? featuredImage.data.attributes.url : ''}
        width={200}
        height={200}
        className="mx-auto w-full rounded-tl-md rounded-tr-md"
      />
      <div className="p-3 pb-7">
        <Link href={`/products/${slug}`} className="hover:underline">
          {name}
        </Link>
        <div className="my-3 mb-12">
          <h3 className="text-xl font-bold mb-1">
            GHS {(Number(discountedPrice) / 100).toFixed(2)}
          </h3>
          <div className="flex items-center">
            <span className="line-through text-xs">
              GHS {(Number(actualPrice) / 100).toFixed(2)}
            </span>
            <span className="ml-5 text-xs bg-blue-600/20 text-blue-600 p-1 rounded-md">
              {(
                ((Number(actualPrice) - Number(discountedPrice)) /
                  Number(actualPrice)) *
                -100
              ).toFixed(0)}
              %
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 mb-5 px-3">
          {cartItem && cartItem.length === 0 ? (
            <div className="hover:bg-green-600 text-green-600 hover:text-white rounded-md py-2 px-4 hover: bg-white border border-green-600 inline-block cursor-pointer">
              <div
                className="flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <BsFillCartPlusFill className="mr-1" />
                <span className="ml-1">Add To Cart</span>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-between items-center">
              <div
                className="bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md cursor-pointer font-black p-3"
                onClick={handleRemoveFromCart}
              >
                -
              </div>
              <span>{cartItem && cartItem[0] ? cartItem[0].qty : 0}</span>
              <div
                className="bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md cursor-pointer font-black p-3"
                onClick={handleAddToCart}
              >
                +
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
