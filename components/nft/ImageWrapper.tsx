import Image from "next/image";

function ImageWrapper({ token }) {
  return (
    <Image
      src={"https://ipfs.io/ipfs/" + token.artifact_uri.split("ipfs://").pop()}
    />
  );
}

export default ImageWrapper;
