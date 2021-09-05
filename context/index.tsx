import React, { MouseEventHandler } from "react";

export class AppCtx {
  Tezos: any;
  address: any;
  activeAccount: any;
  wallet: any;
  collection: any;
  creations: any;
  login: MouseEventHandler;
  logout: MouseEventHandler;
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
};

const AppContext = React.createContext(defaultCtx as any);
export default AppContext;
