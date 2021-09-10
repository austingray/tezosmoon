import React from "react";
import { fetchObjkt } from "../context/graphql/queries";
import { tokenTicketId } from "./containers/ContainerAuthLuckyPenny";
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
    const objkt = await fetchObjkt(tokenTicketId);
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
              This site is in very early alpha and is not ready to be used. But
              if you want to sneak a peek you can buy my lucky penny. Connect
              with a wallet that possesses my lucky penny and the site is yours.
            </p>
            <p>
              <a href="https://github.com/austingray/tezosmoon" target="_blank">
                view source
              </a>
            </p>
          </div>

          <div className="inline-block m-auto pb-8 mt-8">
            {this.state.objkt && (
              <NFTPoster token={this.state.objkt} placeholder={false} />
            )}
          </div>
        </div>
      </ContainerBlackPurpleGradient>
    );
  }
}

export default Login;
