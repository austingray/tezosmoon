import Token from "../../context/classes/Token";
import NFTPoster from "./NFTPoster";

function MasonryLayout({ nfts }) {
  return (
    <>
      <div className="grid lg:grid-cols-3 max-w-screen md:grid-cols-2 grid-cols-1 space-x-4">
        {nfts.map((nft) => {
          const token: Token = nft.token ? nft.token : nft;
          return (
            <div key={token.id} className="rounded-lg">
              <NFTPoster placeholder={true} token={token} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MasonryLayout;
