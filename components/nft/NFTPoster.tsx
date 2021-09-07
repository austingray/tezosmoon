import React from "react";
import { Swap } from "../../context/classes/Token";
import { fetchObjktAsk } from "../../context/graphql/queries";
import sortListingsByPrice from "../../utils/sortListingsByPrice";
import ImageWrapper from "./ImageWrapper";
import Metadata from "./Metadata";
import VideoWrapper from "./VideoWrapper";

class NFTPoster extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      token: { ...props.token, ...{ listings: [] } },
      placeholder: props.placeholder,
    };
  }

  async componentDidMount() {
    const ask = await fetchObjktAsk(this.state.token.id);
    const swaps = this.state.token.swaps.filter(
      (swap: Swap) => swap.contract_version === 2
    );

    const listings = ask ? [...swaps, ...ask] : swaps;
    const sorted = listings.sort(sortListingsByPrice);

    this.setState({
      token: { ...this.state.token, ...{ ask, listings: sorted } },
    });
  }

  render() {
    const token = this.state.token;
    return (
      <div key={token.id} className="bg-black mt-4 rounded-2xl">
        <div className="p-5">
          {this.state.placeholder ? (
            <ImageWrapper token={token} placeholder={true} />
          ) : (
            <>
              {token.mime.split("/")[0] === "video" && (
                <VideoWrapper token={token} />
              )}
              {token.mime.split("/")[0] === "image" && (
                <ImageWrapper token={token} />
              )}
            </>
          )}
        </div>

        <div className="px-5 pb-5">
          <Metadata token={token} />
        </div>
      </div>
    );
  }
}

export default NFTPoster;
