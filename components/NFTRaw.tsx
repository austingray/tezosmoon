import styles from "../styles/Home.module.css";

export default function NFTRaw({ nft }) {
  console.log(nft);
  return (
    <div key={nft.token.id} className="p-5">
      <h3>{nft.token.title}</h3>

      <div className="">
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

      <div className="">
        <div className="">
          {Object.entries(nft.token).map(([key, value]) => (
            <div className="grid grid-cols-3">
              <div className="">{key}</div>
              <div className="break-all col-span-2">
                {JSON.stringify(value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
