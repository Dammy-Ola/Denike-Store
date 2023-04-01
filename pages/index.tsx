import { IProductsRes, Products, getProducts } from '@/features/product'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  productsRes,
}) => {
  return (
    <>
      <Head>
        <title>Denike Store</title>
        <meta
          name="description"
          content="Cheaper product, convinient shopping"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-blue-600 h-80 flex flex-col items-center justify-center text-white mb-10">
          <h1 className="text-center text-4xl font-bold">
            Welcome to Denike store
          </h1>
          <p className="my-5">Cheaper product, convinient shopping</p>
        </div>
        <section className="container">
          <Products productsRes={productsRes} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  productsRes: IProductsRes
}> = async () => {
  const productsRes = await getProducts()

  if (!productsRes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productsRes,
    },
    revalidate: 1,
  }
}

export default HomePage
