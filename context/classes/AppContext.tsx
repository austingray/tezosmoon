import React, { MouseEventHandler, useContext } from "react";
import Token from "./Token";

export class AppCtx {
  Tezos: any;
  address: any;
  activeAccount: any;
  wallet: any;
  collection: any;
  creations: any;
  login: MouseEventHandler;
  logout: MouseEventHandler;
  updateNFTData: any;
  nftData: {
    [key: number]: Token;
  };
  collect: any;
}

export const defaultCtx: AppCtx = {
  Tezos: null,
  address: null,
  activeAccount: null,
  wallet: null,
  collection: [],
  creations: [],
  login: () => {},
  logout: () => {},
  updateNFTData: () => {},
  nftData: {},
  collect: () => {},
};

const AppContext = React.createContext(defaultCtx as any);
export default AppContext;

export function useAppContext() {
  return useContext(AppContext);
}
