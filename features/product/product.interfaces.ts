import { IImage, IMeta } from '@/utils'

export interface IProductsRes {
  data: IProduct[]
  meta: IMeta
}

export interface IProduct {
  id: number
  attributes: IProductAttributes
}

export interface IProductAttributes {
  name: string
  slug: string
  description: string
  actualPrice: string
  discountedPrice: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  featuredImage: IImage | null
  images: IImage | null
}
