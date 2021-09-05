import React, { createContext, useContext } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { fetchCollectorGallery, fetchCreatorGallery } from "./graphql/queries";
import AppContext, { defaultCtx } from ".";

export class TezosMoon extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultCtx;
  }

  componentDidMount = async () => {
    const wallet = new BeaconWallet({
      name: "tezosmoon.com",
      preferredNetwork: NetworkType.MAINNET,
    });

    const Tezos = new TezosToolkit("https://api.tez.ie/rpc/mainnet");
    Tezos.setWalletProvider(wallet);

    const activeAccount = await wallet.client.getActiveAccount();
    console.log({ activeAccount });

    let address = undefined;
    let collection = [];
    let creations = [];
    if (activeAccount) {
      address = await wallet.getPKH();
      collection = await fetchCollectorGallery(activeAccount.address);
      creations = await fetchCreatorGallery(activeAccount.address);
    }

    const login = async () => {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.MAINNET,
          rpcUrl: "https://mainnet.smartpy.io",
        },
      });

      const activeAccount = await wallet.client.getActiveAccount();
      const address = await wallet.getPKH();
      const collection = await fetchCollectorGallery(activeAccount.address);
      this.setState({
        activeAccount,
        address,
        collection,
      });
    };

    const logout = async () => {
      await wallet.client.clearActiveAccount();
      this.setState({
        activeAccount: undefined,
        address: undefined,
        collection: undefined,
      });
    };

    this.setState({
      Tezos: Tezos,
      address,
      activeAccount,
      wallet,
      collection,
      creations,
      login,
      logout,
    });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
