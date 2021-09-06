import Head from "next/head";
import { fetchCollectorGallery } from "../../../context/graphql/queries";
import { validateAddress } from "@taquito/utils";
import MasonryLayout from "../../../components/MasonryLayout";
import TMHead from "../../../components/TMHead";

const Collection = ({ address, collection }) => {
  return (
    <div>
      <TMHead title={`Tezos Moon - ${address} Collection`} />

      <main className="p-6 ">
        <div className="">
          <MasonryLayout nfts={collection} />
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
