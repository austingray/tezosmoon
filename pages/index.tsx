import Head from 'next/head'
import Masonry from 'react-masonry-css'
import { useAppContext } from '../context/TezosMoon'
import styles from '../styles/Home.module.css'
import NFTMasonry from '../components/NFTMasonry';

export default function Home() {

  const ctx = useAppContext()
  console.log(ctx);

  let headerUserBadge;
  if (ctx && ctx.activeAccount && ctx.activeAccount.address) {
    // load profile
    headerUserBadge = <button onClick={() => { ctx.logout() }}>Disconnect { ctx.activeAccount.address }</button>
  } else {
    headerUserBadge = <button onClick={() => { ctx.login() }}>Connect 🌕</button>
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Tezos Moon</title>
        <meta name="description" content="Tezos Moon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {headerUserBadge}
      </header>

      <main className={styles.main}>
        <h1>Tezos Moon</h1>
        <p>Augment your <a href="https://hicetnunc.xyz" target="_blank">hicetnunc</a> NFT experience.</p>

        <Masonry

          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {ctx && ctx.collection && ctx.creations && [...ctx.creations, ...ctx.collection].map((nft) => {
            return (
              <NFTMasonry nft={nft} />
            )
          })}
        </Masonry>
      </main>

      <footer className={styles.footer}>
        <div>
          <a href="https://github.com/austingray/tezosmoon" target="_blank">View on Github</a>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  return { props: {} }
}