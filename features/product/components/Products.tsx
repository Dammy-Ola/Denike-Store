import React, { FC } from 'react'
import { IProductsRes, ProductItem } from '../index'

const Products: FC<{ productsRes: IProductsRes }> = ({
  productsRes: { data: products },
}) => {
  return (
    <section>
      <h2 className="font-semibold text-green-600 text-2xl text-center mb-5">
        Browse Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
        {products.length <= 0
          ? 'No product Found'
          : products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </section>
  )
}

export default Products
