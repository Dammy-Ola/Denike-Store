import ProductItem from './components/ProductItem'
import Products from './components/Products'
import {
  IProduct,
  IProductAttributes,
  IProductsRes,
} from './product.interfaces'
import { getProducts } from './product.services'

export { Products, ProductItem }

export type { IProduct, IProductAttributes, IProductsRes }

export { getProducts }
