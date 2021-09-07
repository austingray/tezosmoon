import ImageWrapper from "./ImageWrapper";
import Metadata from "./Metadata";
import VideoWrapper from "./VideoWrapper";

export default function NFTPoster({ token }) {
  return (
    <div key={token.id} className="bg-black mt-4 rounded-2xl">
      <div className="p-5">
        {token.mime.split("/")[0] === "video" && <VideoWrapper token={token} />}
        {token.mime.split("/")[0] === "image" && <ImageWrapper token={token} />}
      </div>

      <div className="px-5 pb-5">
        <Metadata token={token} />
      </div>
    </div>
  );
}
