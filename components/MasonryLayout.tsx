import NFTRaw from "./NFTRaw";

function MasonryLayout({ nfts }) {
  return (
    <div className="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
      {nfts.map((nft) => {
        return (
          <div className="break-inside my-6 rounded-lg">
            <NFTRaw nft={nft} />
          </div>
        );
      })}
    </div>
  );
}

export default MasonryLayout;
