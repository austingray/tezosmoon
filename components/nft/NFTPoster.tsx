import ImageWrapper from "./ImageWrapper";
import VideoWrapper from "./VideoWrapper";

export default function NFTPoster({ token }) {
  return (
    <div key={token.id} className="p-5 grid grid-cols-2">
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
