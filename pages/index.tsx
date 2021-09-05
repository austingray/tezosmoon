import Head from "next/head";
import Masonry from "react-masonry-css";
import styles from "../styles/Home.module.css";
import NFTRaw from "../components/NFTRaw";
import AppContext from "../context";

const viewOptions = ["date: newest", "date: oldest"];

export default function Home() {
  return (
    <AppContext.Consumer>
      {({ collection }) => {
        return (
          <div className={styles.container}>
            <Head>
              <title>Tezos Moon</title>
              <meta name="description" content="Tezos Moon App" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
              <h1>Tezos Moon</h1>
              <p>Tezos NFT Browser [alpha]</p>
              <div className={styles["pick-view"]}>
                <label htmlFor="pick-view">sort by</label>
                <select id="pick-view" name="pick-view" onChange={() => {}}>
                  {viewOptions.map((opt) => {
                    return <option>{opt}</option>;
                  })}
                  <option></option>
                </select>
              </div>

              <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {collection.map((nft) => {
                  return <NFTRaw nft={nft} />;
                })}
              </Masonry>
            </main>

            <footer className={styles.footer}>
              <div>
                <a
                  href="https://github.com/austingray/tezosmoon"
                  target="_blank"
                >
                  View on Github
                </a>
              </div>
            </footer>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

// export async function getStaticProps({ params }) {
//   return { props: {} };
// }
