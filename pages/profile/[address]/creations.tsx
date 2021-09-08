import { fetchCreatorGallery } from "../../../context/graphql/queries";
import { validateAddress } from "@taquito/utils";
import MasonryLayout from "../../../components/nft/MasonryLayout";
import TMHead from "../../../components/TMHead";
import NavProfile from "../../../components/NavProfile";
import NFTListItem from "../../../components/nft/NFTListItem";
import React from "react";

class Collection extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { creations: [] };
  }

  async componentDidMount() {
    const address = this.props.address;
    if (validateAddress(address)) {
      const creations = await fetchCreatorGallery(address as string);
      this.setState({
        creations,
      });
    }
  }

  render() {
    const address = this.props.address;
    const creations = this.state.creations;
    return (
      <div>
        <TMHead title={`Tezos Moon - ${address} Creations`} />

        <main className="p-6 ">
          <NavProfile address={address} />
          <h1 className="text-4xl">Creations</h1>
          <div className="">
            {creations.length > 0 ? (
              <MasonryLayout nfts={creations} />
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
