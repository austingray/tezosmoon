function NFTListItem({ nft }) {
  const token = nft.token ? nft.token : nft;
  return (
    <div key={token.id}>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <img
            src={
              "https://ipfs.io/ipfs/" + token.display_uri.split("ipfs://").pop()
            }
          />
        </div>
        <div className="break-all col-span-8"></div>
      </div>
    </div>
  );
}

export default NFTListItem;
