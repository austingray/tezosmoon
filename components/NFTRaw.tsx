export default function NFTRaw({ nft }) {
  const token = nft.token ? nft.token : nft;
  return (
    <div key={token.id} className="p-5">
      <div className="">
        {token.mime.split("/")[0] === "video" && (
          <video
            loop={true}
            src={
              "https://ipfs.io/ipfs/" +
              token.artifact_uri.split("ipfs://").pop()
            }
            poster={
              "https://ipfs.io/ipfs/" + token.display_uri.split("ipfs://").pop()
            }
            autoPlay={true}
            playsInline={true}
            muted={true}
          ></video>
        )}
        {token.mime.split("/")[0] === "image" && (
          <img
            src={
              "https://ipfs.io/ipfs/" +
              token.artifact_uri.split("ipfs://").pop()
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
