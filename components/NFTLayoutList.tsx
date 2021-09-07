import NFTListItem from "./nft/NFTListItem";

function MasonryLayout({ nfts }) {
  return (
    <div className="">
      {nfts.map((nft) => {
        return (
          <div className="break-inside my-6">
            <NFTListItem nft={nft} />
          </div>
        );
      })}
    </div>
  );
}

export default MasonryLayout;
