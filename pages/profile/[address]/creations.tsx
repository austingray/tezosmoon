import { fetchCreatorGallery } from "../../../context/graphql/queries";
import { validateAddress } from "@taquito/utils";
import MasonryLayout from "../../../components/nft/MasonryLayout";
import TMHead from "../../../components/TMHead";
import NavProfile from "../../../components/NavProfile";
import NFTListItem from "../../../components/nft/NFTListItem";

const Collection = ({ address, collection }) => {
  return (
    <div>
      <TMHead title={`Tezos Moon - ${address} Creations`} />

      <main className="p-6 ">
        <NavProfile address={address} />
        <h1 className="text-4xl">Creations</h1>
        <div className="">
          {collection.length > 0 ? (
            <MasonryLayout nfts={collection} />
          ) : (
            <div>This address has not minted any creations.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collection;

export async function getServerSideProps(context) {
  const { address } = context.query;

  let collection = [];
  if (validateAddress(address)) {
    collection = await fetchCreatorGallery(address as string);
  }

  return {
    props: { address, collection },
  };
}
