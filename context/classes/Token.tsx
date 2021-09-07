// token object from hicetnunc
export default class Token {
  id: number;
  artifact_uri: string;
  display_uri: string;
  thumbnail_uri: string;
  mime: string;
  title: string;
  description: string;
  supply: number;
  timestamp: string | Date;
  ask: any[] = [];
  swaps: Swap[] = [];
  listings: Listing[] = [];
  creator: Creator;
}

export class Swap {
  contract_version: number;
  status: number;
  amount_left: number;
  creator_id: string;
  creator: {
    address: string;
  };
  price: number;
}

export class Creator {
  address: string;
  name: string;
  metadata: any;
}

export class Listing {
  price: number;
}
