import styles from "../styles/Home.module.css";
import ImageWrapper from "./nft/ImageWrapper";
import VideoWrapper from "./nft/VideoWrapper";

export default function NFTMasonry({ nft }) {
  return (
    <div className={styles.nft}>
      <div className={styles.mediaBox}>
        {nft.token.mime.split("/")[0] === "video" && (
          <VideoWrapper token={nft.token} />
        )}

        {nft.token.mime.split("/")[0] === "image" && (
          <ImageWrapper token={nft.token} />
        )}
      </div>
    </div>
  );
}
