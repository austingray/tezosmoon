import Image from "next/image";
import { useAppContext } from "../context/TezosMoon";
import styles from '../styles/Home.module.css'

export default function NFTRaw({ nft }) {

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
  }