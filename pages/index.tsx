import Head from "next/head";
import Masonry from "react-masonry-css";
import styles from "../styles/Home.module.css";
import NFTRaw from "../components/NFTRaw";
import AppContext from "../context";

export default function Home() {
  return (
    <AppContext.Consumer>
      {({ activeAccount, collection }) => {
        return (
          <div className={styles.container}>
            <Head>
              <title>Tezos Moon</title>
              <meta name="description" content="Tezos Moon App" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
              {!activeAccount && (
                <p className="max-w-md">
                  Tezos Moon is an app to browse, display, and analyze your
                  Tezos NFTs (only hicetnunc for now). Use the 'connect' button
                  in the upper right to connect your wallet and browse your
                  collection.
                </p>
              )}

              {activeAccount && (
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {collection &&
                    collection.map((nft) => {
                      return <NFTRaw nft={nft} />;
                    })}
                </Masonry>
              )}
            </main>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
