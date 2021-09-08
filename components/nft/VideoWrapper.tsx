function VideoWrapper({ token }) {
  return (
    <video
      loop={true}
      src={"https://ipfs.io/ipfs/" + token.artifact_uri.split("ipfs://").pop()}
      poster={
        "https://ipfs.io/ipfs/" + token.display_uri.split("ipfs://").pop()
      }
      autoPlay={true}
      playsInline={true}
      muted={true}
      controls={true}
    ></video>
  );
}

export default VideoWrapper;
