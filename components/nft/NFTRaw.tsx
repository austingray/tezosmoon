import Token from "../../context/classes/Token";
import ImageWrapper from "./ImageWrapper";
import VideoWrapper from "./VideoWrapper";

export default function NFTRaw({ nft }) {
  const token: Token = nft.token ? nft.token : nft;
  return (
    <div key={token.id} className="p-5">
      <div className="">
        {token.mime.split("/")[0] === "video" && <VideoWrapper token={token} />}
        {token.mime.split("/")[0] === "image" && <ImageWrapper token={token} />}
      </div>

      <div className="">
        <div className="">
          {Object.entries(token).map(([key, value]) => (
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
