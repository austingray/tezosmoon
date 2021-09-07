function ImageWrapper({ token }) {
  return (
    <img
      src={"https://ipfs.io/ipfs/" + token.artifact_uri.split("ipfs://").pop()}
    />
  );
}

export default ImageWrapper;
