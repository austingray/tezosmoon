import { fetchCollectorGallery } from "../../../context/graphql/queries";
import { validateAddress } from "@taquito/utils";
import TMHead from "../../../components/TMHead";
import NavProfile from "../../../components/NavProfile";
import MasonryLayout from "../../../components/nft/MasonryLayout";
import React from "react";

class Collection extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    };
  }
  async componentDidMount() {
    const address = this.props.address;
    if (validateAddress(address)) {
      const collection = await fetchCollectorGallery(address as string);
      this.setState({ collection });
    }
  }

  render() {
    const address = this.props.address;
    const collection = this.state.collection;
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
  }
}

export default Collection;

export async function getServerSideProps(context) {
  const { address } = context.query;

  return {
    props: { address },
  };
}
