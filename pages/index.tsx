import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import { useAppContext } from '../context/TezosMoon'
import styles from '../styles/Home.module.css'

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

        {ctx && ctx.collection && ctx.creations && [...ctx.creations, ...ctx.collection].map((nft) => {
          return (
            <div key={nft.token.id} className={styles.nft}>
              <h3>{nft.token.title}</h3>
              <p>{JSON.stringify(nft.token, null, 2)}</p>
              <div className={styles.mediaBox}>
                {(nft.token.mime === 'video/mp4') && <video
                    loop={true}
                    src={"https://ipfs.io/ipfs/"+nft.token.artifact_uri.split('ipfs://').pop()}
                    poster={"https://ipfs.io/ipfs/"+nft.token.display_uri.split('ipfs://').pop()}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                ></video>}
                
                {(nft.token.mime.split('/')[0] === 'image') && <Image
                  layout={'fill'}
                  objectFit={'contain'}
                  src={"https://ipfs.io/ipfs/"+nft.token.artifact_uri.split('ipfs://').pop()}
                />}
              </div>
            </div>
          )
        })}
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