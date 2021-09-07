// token object from hicetnunc
export default class Token {
  id: number;
  artifact_uri: string;
  display_uri: string;
  mime: string;
  title: string;
  description: string;
  supply: number;
  timestamp: string | Date;
  swaps: any[];
}
