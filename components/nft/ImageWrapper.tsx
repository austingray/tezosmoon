function ImageWrapper({ token, placeholder = false }) {
  const display_uri =
    token.display_uri && token.display_uri !== ""
      ? token.display_uri
      : token.artifact_uri;
  const artifact_uri = token.artifact_uri;
  const ipfs_uri = placeholder ? display_uri : artifact_uri;
  const ipfs_id = ipfs_uri.split("ipfs://").pop();
  const imgUrl = `https://ipfs.io/ipfs/${ipfs_id}`;
  return <img src={imgUrl} />;
}

export default ImageWrapper;
