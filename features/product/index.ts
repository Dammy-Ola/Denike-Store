import ProductDetails from './components/ProductDetails'
import ProductItem from './components/ProductItem'
import Products from './components/Products'
import {
  IProduct,
  IProductAttributes,
  IProductsRes,
} from './product.interfaces'
import { getProducts, getSingleProduct } from './product.services'

export { Products, ProductItem, ProductDetails }

export type { IProduct, IProductAttributes, IProductsRes }

export { getProducts, getSingleProduct }
