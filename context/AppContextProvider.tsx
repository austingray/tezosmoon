import React from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { fetchCollectorGallery, fetchCreatorGallery } from "./graphql/queries";
import AppContext, { AppCtx, defaultCtx } from "./classes/AppContext";
import Token from "./classes/Token";

const v2Address = "KT1HbQepzV1nVGg8QVznG7z4RcHseD5kwqBn"; // OBJKTs Marketplace V2 address

class AppContextProvider extends React.Component<any, AppCtx> {
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

    let address = undefined;
    let collection = [];
    let creations = [];
    if (activeAccount) {
      address = activeAccount.address;
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

    const updateNFTData = (token: Token) => {
      this.setState({
        nftData: {
          ...this.state.nftData,
          ...{
            [token.id]: token,
          },
        },
      });
    };

    const collect = async (swap_id, amount) => {
      await Tezos.wallet
        .at(v2Address)
        .then((c) =>
          c.methods.collect(parseFloat(swap_id)).send({
            amount: parseFloat(amount),
            mutez: true,
            storageLimit: 350,
          })
        )
        .catch((e) => e);
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
      updateNFTData,
      nftData: {},
      collect,
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

export default AppContextProvider;
