import React, { FC } from 'react'
import { IProduct } from '../index'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { addToCart, removeFromCart } from '@/features/cart'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import Link from 'next/link'

const ProductDetails: FC<{ product: IProduct }> = ({
  product: {
    id,
    attributes: {
      name,
      actualPrice,
      discountedPrice,
      featuredImage,
      description,
    },
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
    <main className="w-11/12 md:w-4/5 mx-auto mt-10">
      <Link
        href={'/'}
        className="inline-block mb-10 border border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-md"
      >
        Go Back
      </Link>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        <div className="col-span-1">
          <Image
            alt="tt"
            src={featuredImage ? featuredImage.data.attributes.url : ''}
            width={500}
            height={500}
            className="mx-auto rounded-md"
          />
        </div>
        <div className="col-span-1">
          <div className="">
            <h1 className="text-xl mb-3">{name}</h1>
            <h3>Brand: Nike</h3>
          </div>
          <div className="mt-3 mb-7 py-1 border-y">
            <h3 className="font-bold text-4xl">
              GHS {(Number(discountedPrice) / 100).toFixed(2)}
            </h3>
            <div className="py-1 flex">
              <h3 className="font-thin line-through mr-10">
                GHS {(Number(actualPrice) / 100).toFixed(2)}
              </h3>
              <h3 className="text-xs bg-blue-600/20 text-blue-600 p-1 rounded-md">
                {(
                  ((Number(actualPrice) - Number(discountedPrice)) /
                    Number(actualPrice)) *
                  -100
                ).toFixed(0)}
                %
              </h3>
            </div>
            <small className="text-red-500">8 units left</small>
          </div>
          <div className="flex w-full">
            <div className="w-2/12 mr-1">
              <a
                href="tel:+4733378901"
                className="flex items-center justify-center border text-green-600 border-green-600 p-3 rounded-md text-center hover:bg-green-600 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdCall className="text-2xl mr-1" />
              </a>
            </div>
            <div className="w-10/12 ml-1">
              {cartItem && cartItem.length === 0 ? (
                <div className="block w-full bg-green-600 text-white rounded-md p-3 hover:bg-green-400 border cursor-pointer">
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
      </section>

      <section className="mt-10 mb-44">
        <div className="bg-white p-5 rounded-md">
          <h2 className="border-b py-2 mb-5 font-semibold text-xl">
            Product Details
          </h2>

          {description}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 md:hidden py-5 md:py-0 shadow-2xl md:shadow-none w-full bg-white md:bg-none">
        <div className="w-4/5 mx-auto md:w-full flex justify-center items-center">
          <div className="flex w-full">
            <div className="w-2/12 mr-1">
              <a
                href="tel:+4733378901"
                className="flex items-center justify-center border text-green-600 border-green-600 p-3 rounded-md text-center hover:bg-green-600 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdCall className="text-2xl mr-1" />
              </a>
            </div>
            <div className="w-10/12 ml-1">
              {cartItem && cartItem.length === 0 ? (
                <div className="block w-full bg-green-600 text-white rounded-md p-3 hover:bg-green-400 border cursor-pointer">
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
      </div>
    </main>
  )
}

export default ProductDetails
