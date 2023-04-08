import {
  IProduct,
  IProductsRes,
  ProductDetails,
  getProducts,
  getSingleProduct,
} from '@/features/product'
import { IParams } from '@/utils'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

const ProductDetailsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ product }) => {
  return <ProductDetails product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productsRes: IProductsRes = await getProducts()

  const paths = productsRes.data.map((product) => ({
    params: { slug: product.attributes.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  product: IProduct
}> = async ({ params }) => {
  const { slug } = params as IParams
  const { data } = await getSingleProduct(slug)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data[0],
    },
    revalidate: 1,
  }
}

export default ProductDetailsPage
