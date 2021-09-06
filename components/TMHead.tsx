import Head from "next/head";

function TMHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Tezos Moon App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default TMHead;
