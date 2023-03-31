import Head from 'next/head'

export default function Home() {
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
        <h1 className="font-bold text-4xl text-center">
          Welcome to Denike Store
        </h1>
      </main>
    </>
  )
}
