import React, { createContext, useContext, useEffect } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-sdk';

const AppContext = createContext(undefined);

export class BeaconWrapper extends React.Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount = async () => {
    const Tezos = new TezosToolkit('https://api.tez.ie/rpc/mainnet');

    const wallet = new BeaconWallet({
      name: 'tezosmoon.com',
      preferredNetwork: NetworkType.MAINNET,
    });

    Tezos.setWalletProvider(wallet);

    const activeAccount = await wallet.client.getActiveAccount()
    console.log({activeAccount})

    let address = undefined;
    if (activeAccount) {
      address = await wallet.getPKH()
    }

    this.setState({
      Tezos: Tezos,
      address,
      activeAccount,
      wallet,

      login: async () => {
        const network = {
          type: NetworkType.MAINNET,
          rpcUrl: 'https://mainnet.smartpy.io',
        }
        await wallet.requestPermissions({ network })
        this.setState({ 
          activeAccount: await wallet.client.getActiveAccount(),
          address: await wallet.getPKH()
        })
      },
      
      logout: async () => {
        await wallet.client.clearActiveAccount()
        this.setState({
          activeAccount: undefined,
          address: undefined,
        })
      }
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export function useAppContext() {
  return useContext(AppContext);
}