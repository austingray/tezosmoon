import React from "react";
import { fetchObjkt } from "../context/graphql/queries";
import ContainerBlackPurpleGradient from "./containers/ContainerBlackPurpleGradient";
import NFTPoster from "./nft/NFTPoster";

class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      objkt: null,
    };
  }

  async componentDidMount() {
    const objkt = await fetchObjkt(249515);
    console.log(objkt);
    this.setState({
      objkt,
    });
  }

  render() {
    return (
      <ContainerBlackPurpleGradient pageTitle="Tezos Moon - Login">
        <div className="max-w-screen-sm m-auto text-center p-8">
          <div>
            <h2 className="text-4xl my-4">Welcome to Tezos Moon [alpha]</h2>
            <p>
              if you can't pick up this lucky penny then this site is not ready
              for you. come back after the alpha.
            </p>
          </div>

          <div className="max-w-sm m-auto pb-8 mt-8">
            {this.state.objkt && <NFTPoster token={this.state.objkt} />}
          </div>
        </div>
      </ContainerBlackPurpleGradient>
    );
  }
}

export default Login;
