import React from "react";
import Link from "next/link";
import ContainerBlackPurpleGradient from "../../components/containers/ContainerBlackPurpleGradient";
import { SVGTezos } from "../../components/Logo";
import NFTPoster from "../../components/nft/NFTPoster";
import { fetchObjkt } from "../../context/graphql/queries";
import { Swap } from "../../context/classes/Token";
import { truncateAddress } from "../../utils/truncateAddress";

class Objkt extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      objkt: null,
    };
  }

  async componentDidMount() {
    const objkt = await fetchObjkt(this.props.objktId);

    this.setState({
      objkt,
    });
  }

  render() {
    const token = this.state.objkt;

    const amountLeft = token
      ? token.swapsFiltered
          .map((swap) => swap.amount_left as number)
          .reduce((acc, a) => {
            return acc + a;
          }, 0)
      : null;

    return (
      <ContainerBlackPurpleGradient
        showLogo={false}
        pageTitle="Tezos Moon - Login"
      >
        <div className="content-center flex px-8">
          {token ? (
            <div className="inline-block m-auto pb-8 mt-8">
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-4xl">{token.title}</h1>
                  <div className="text-xl">
                    Created by{" "}
                    <Link href={`/profile/${token.creator.address}`}>
                      <a>{token.creator.name}</a>
                    </Link>
                  </div>
                </div>

                <div className="text-right align-bottom mt-auto">
                  <div className="text-lg">
                    <span>Lowest Price:</span>{" "}
                    {token.swapsFiltered[0].price / 1000000}
                    <span className="ml-1">
                      <SVGTezos color="#dedede" width={14} className="inline" />
                    </span>
                  </div>
                  <div>
                    {amountLeft.toLocaleString()} /{" "}
                    {token.supply.toLocaleString()} Editions
                  </div>
                </div>
              </div>
              <NFTPoster token={token} placeholder={false} />
            </div>
          ) : (
            <div className="inline-block m-auto pb-8 mt-8">
              <NFTPoster token={token} placeholder={false} />
            </div>
          )}
        </div>

        <div className="content-center px-8">
          {token && (
            <div className="w-screen">
              {token.trades &&
                token.trades
                  .map((t, i) => ({ ...t, id: i }))
                  .sort((a, b) => {
                    if (a.timestamp > b.timestamp) return -1;
                    if (a.timestamp < b.timestamp) return 1;
                    return 0;
                  })
                  .map((trade) => (
                    <div className="grid grid-cols-5 my-4" key={trade.id}>
                      <div>paid: {trade.swap.price / 1000000} tez</div>
                      <div>
                        buy addr:{" "}
                        <Link href={`/profile/${trade.buyer.address}`}>
                          {truncateAddress(trade.buyer.address)}
                        </Link>
                        <br />
                        {trade.buyer.name.length > 0 && (
                          <>[{trade.buyer.name}]</>
                        )}
                      </div>
                      <div>
                        sell addr:{" "}
                        <Link href={`/profile/${trade.seller.address}`}>
                          {truncateAddress(trade.seller.address)}
                        </Link>
                      </div>
                      <div>time: {trade.timestamp}</div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </ContainerBlackPurpleGradient>
    );
  }
}

export default Objkt;

export async function getServerSideProps(context) {
  const { objktId } = context.query;
  return {
    props: {
      objktId,
    },
  };
}
