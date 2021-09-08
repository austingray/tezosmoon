import Head from "next/head";

function TMHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Tezos Moon App" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tezosmoonapp" />
      <meta name="twitter:title" content="Tezos Moon - NFT Browser" />
      <meta
        name="twitter:description"
        content="Browse and manage Tezos NFTs."
      />
      <meta
        name="twitter:image"
        content="https://tezosmoonapp.com/img/tezos-moon-306x306.png"
      />
    </Head>
  );
}

export default TMHead;
