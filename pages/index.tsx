import Head from "next/head";
import AppContext from "../context";
import MasonryLayout from "../components/MasonryLayout";

export default function Home() {
  return (
    <AppContext.Consumer>
      {({ activeAccount, collection }) => {
        return (
          <div>
            <Head>
              <title>Tezos Moon</title>
              <meta name="description" content="Tezos Moon App" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="p-6 ">
              {!activeAccount && (
                <div className="min-h-screen flex flex-wrap justify-center content-center">
                  <div className="max-w-md">
                    Tezos Moon is (will be) an app to browse, display, and
                    analyze your Tezos NFTs (only hicetnunc for now). Use the
                    'connect' button in the upper right to connect your wallet
                    and browse your collection. You can view the source to this
                    website{" "}
                    <a href="https://github.com/austingray/tezosmoon">here</a>.
                  </div>
                </div>
              )}

              {activeAccount && (
                <div className="">
                  <MasonryLayout nfts={collection} />
                </div>
              )}
            </main>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
