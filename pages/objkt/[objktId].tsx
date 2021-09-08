import React from "react";
import ContainerBlackPurpleGradient from "../../components/containers/ContainerBlackPurpleGradient";
import { SVGTezos } from "../../components/Logo";
import NFTPoster from "../../components/nft/NFTPoster";
import { fetchObjkt } from "../../context/graphql/queries";

class Objkt extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      objkt: null,
    };
  }

  async componentDidMount() {
    const objkt = await fetchObjkt(this.props.objktId);
    console.log(objkt);
    this.setState({
      objkt,
    });
  }

  render() {
    const token = this.state.objkt;

    return (
      <ContainerBlackPurpleGradient
        showLogo={false}
        pageTitle="Tezos Moon - Login"
      >
        <div className="content-center flex px-8">
          {token && (
            <div className="inline-block m-auto pb-8 mt-8">
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-4xl">{token.title}</h1>
                  <div className="text-xl">Created by {token.creator.name}</div>
                </div>

                <div className="text-right align-bottom mt-auto">
                  <div className="text-lg">
                    {token.swapsFiltered[0].price / 1000000}
                    <span className="ml-1">
                      <SVGTezos color="#dedede" width={14} className="inline" />
                    </span>
                  </div>
                  <div>
                    {token.swapsFiltered.length.toLocaleString()} /{" "}
                    {token.supply.toLocaleString()} Editions
                  </div>
                </div>
              </div>
              <NFTPoster token={token} placeholder={false} />
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
