import { fetchCollectorGallery } from "../../../context/graphql/queries";
import { validateAddress } from "@taquito/utils";
import TMHead from "../../../components/TMHead";
import NavProfile from "../../../components/NavProfile";
import MasonryLayout from "../../../components/nft/MasonryLayout";

const Collection = ({ address, collection }) => {
  return (
    <div>
      <TMHead title={`Tezos Moon - ${address} Collection`} />

      <main className="p-6 ">
        <NavProfile address={address} />
        <h1 className="text-4xl">Collection</h1>
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
    collection = await fetchCollectorGallery(address as string);
  }

  return {
    props: { address, collection },
  };
}
