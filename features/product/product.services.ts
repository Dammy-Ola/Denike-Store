import { makeRequest } from '@/lib'
import { IProductsRes } from './product.interfaces'

export const getProducts = async (): Promise<IProductsRes> => {
  const { data } = await makeRequest.get<IProductsRes>('/products?populate=*')

  return data
}
