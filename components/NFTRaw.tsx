import styles from "../styles/Home.module.css";

export default function NFTRaw({ nft }) {
  console.log(nft);
  return (
    <div key={nft.token.id} className={styles.nft}>
      <h3>{nft.token.title}</h3>
      <p>{JSON.stringify(nft.token, null, 2)}</p>
      <div className={styles.mediaBox}>
        {nft.token.mime.split("/")[0] === "video" && (
          <video
            loop={true}
            src={
              "https://ipfs.io/ipfs/" +
              nft.token.artifact_uri.split("ipfs://").pop()
            }
            poster={
              "https://ipfs.io/ipfs/" +
              nft.token.display_uri.split("ipfs://").pop()
            }
            autoPlay={true}
            playsInline={true}
            muted={true}
          ></video>
        )}

        {nft.token.mime.split("/")[0] === "image" && (
          <img
            src={
              "https://ipfs.io/ipfs/" +
              nft.token.artifact_uri.split("ipfs://").pop()
            }
          />
        )}
      </div>
    </div>
  );
}
