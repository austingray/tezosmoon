import { validateAddress } from "@taquito/utils";
import TMHead from "../../../components/TMHead";
import NavProfile from "../../../components/NavProfile";
import React from "react";

const fetchProfile = async (address) => {
  const res = await fetch(`https://api.tzkt.io/v1/accounts/${address}`);
  return await res.json();
};

const fetchProfileMetadata = async (address) => {
  const res = await fetch(
    `https://api.tzkt.io/v1/accounts/${address}/metadata`
  );
  return await res.json();
};

class Profile extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      tzktProfile: null,
      tzktProfileMetadata: null,
    };
  }

  async componentDidMount() {
    if (!validateAddress(this.props.address)) {
      return;
    }

    const tzktProfile = await fetchProfile(this.props.address);
    const tzktProfileMetadata = await fetchProfileMetadata(this.props.address);

    this.setState({
      tzktProfile,
      tzktProfileMetadata,
    });
  }

  render() {
    const alias =
      this.state.tzktProfile && this.state.tzktProfile.alias
        ? this.state.tzktProfile.alias
        : this.props.address;

    return (
      <div>
        <TMHead title={`Tezos Moon - ${this.props.address} Profile`} />

        <main className="p-6">
          <NavProfile address={this.props.address} />

          <h1 className="mb-4 text-2xl">{alias}</h1>

          <div>
            <h2>
              Results from <a href="https://tzkt.io">TzKT</a>:
            </h2>
            {this.state.tzktProfile &&
              Object.entries(this.state.tzktProfile).map(([key, value]) => (
                <div className="grid grid-cols-3" key={key}>
                  <div className="">{key}</div>
                  <div className="break-all col-span-2">
                    {JSON.stringify(value)}
                  </div>
                </div>
              ))}
            {this.state.tzktProfileMetadata &&
              Object.entries(this.state.tzktProfileMetadata).map(
                ([key, value]) => (
                  <div className="grid grid-cols-3" key={key}>
                    <div className="">{key}</div>
                    <div className="break-all col-span-2">
                      {JSON.stringify(value)}
                    </div>
                  </div>
                )
              )}
          </div>
        </main>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { address } = context.query;

  if (!validateAddress(address)) {
    throw new Error("Bad address.");
  }

  return {
    props: { address },
  };
}

export default Profile;
