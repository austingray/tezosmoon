import { getSortedRoutes } from "next/dist/shared/lib/router/utils";
import Token from "../../context/classes/Token";
import NFTPoster from "./NFTPoster";

function sortBy(nfts: Token[], sortByVal = "price:high") {
  let sorted = [];

  switch (sortByVal) {
    case "price:high":
    // sorted =
  }

  return getSortedRoutes;
}

function MasonryLayout({ nfts }) {
  const handleSort = () => {
    console.log(nfts);
  };

  return (
    <>
      <select onChange={handleSort}>
        <option>Default</option>
        <option>price:high</option>
      </select>

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
