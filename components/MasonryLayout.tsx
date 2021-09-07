import NFTPoster from "./nft/NFTPoster";
import NFTRaw from "./nft/NFTRaw";

// <div className="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
function MasonryLayout({ nfts }) {
  return (
    <div className="grid grid-cols-4 max-w-screen">
      {nfts.map((nft) => {
        return (
          <div className="rounded-lg">
            <NFTPoster token={nft.token ? nft.token : nft} />
          </div>
        );
      })}
    </div>
  );
}

export default MasonryLayout;
