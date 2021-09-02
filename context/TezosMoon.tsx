import React, { createContext, useContext, useEffect } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-sdk';

const fetch = require('node-fetch')

const sortByTokenId = (a, b) => {
  return b.id - a.id
}

const query_creations = `
query creatorGallery($address: String!) {
  hic_et_nunc_token(where: {creator: {address: {_eq: $address}}, supply: {_gt: 0}}, order_by: {id: desc}) {
    id
    artifact_uri
    display_uri
    mime
    title
    description
    supply
    swaps(order_by: {price: asc}, limit: 1, where: {amount_left: {_gte: "1"}, status: {_eq: "0"}}) {
      status
      amount_left
      creator_id
      creator {
        address
      }
      price
    }
  }
}
`

const query_collection = `
query collectorGallery($address: String!) {
  hic_et_nunc_token_holder(where: {holder_id: {_eq: $address}, token: {creator: {address: {_neq: $address}}}, quantity: {_gt: "0"}}, order_by: {token_id: desc}) {
    token {
      id
      artifact_uri
      display_uri
      thumbnail_uri
      timestamp
      mime
      title
      description
      supply
      token_tags {
        tag {
          tag
        }
      }
      creator {
        address
      }
    }
  }
}
`

async function fetchGraphQL(operationsDoc, operationName, variables) {
  let result = await fetch('https://api.hicdex.com/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  })
  return await result.json()
}

async function fetchCreations(addr) {
  const { errors, data } = await fetchGraphQL(
    query_creations,
    'creatorGallery',
    { address: addr }
  )
  if (errors) {
    console.error(errors)
  }
  const result = data.hic_et_nunc_token
  /* console.log({ result }) */
  return result
}

async function fetchCollection(addr) {
  const { errors, data } = await fetchGraphQL(
    query_collection,
    'collectorGallery',
    { address: addr }
  )
  if (errors) {
    console.error(errors)
  }
  const result = data.hic_et_nunc_token_holder
  // console.log('collection result' + { result })
  return result
}

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
    let collection = [];
    let creations = [];
    if (activeAccount) {
      address = await wallet.getPKH();
      collection = await fetchCollection(activeAccount.address);
      creations = await fetchCreations(activeAccount.address);
      creations = creations.map(c => ({token: c}));
    }

    this.setState({
      Tezos: Tezos,
      address,
      activeAccount,
      wallet,
      collection,
      creations,

      login: async () => {
        const network = {
          type: NetworkType.MAINNET,
          rpcUrl: 'https://mainnet.smartpy.io',
        }
        await wallet.requestPermissions({ network })
        const activeAccount = await wallet.client.getActiveAccount()
        const collection = await fetchCollection(activeAccount.address);
        console.log(collection);
        this.setState({ 
          activeAccount,
          address: await wallet.getPKH(),
          collection,
        })
      },
      
      logout: async () => {
        await wallet.client.clearActiveAccount()
        this.setState({
          activeAccount: undefined,
          address: undefined,
          collection: undefined,
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