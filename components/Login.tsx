import React from "react";
import { fetchObjkt } from "../context/graphql/queries";
// import { tokenTicketId } from "./containers/ContainerAuthLuckyPenny";
import ContainerBlackPurpleGradient from "./containers/ContainerBlackPurpleGradient";
import NFTPoster from "./nft/NFTPoster";

class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      objkt: null,
    };
  }

  // async componentDidMount() {
  //   const objkt = await fetchObjkt(tokenTicketId);
  //   this.setState({
  //     objkt,
  //   });
  // }

  render() {
    return (
      <ContainerBlackPurpleGradient pageTitle="Tezos Moon - Login">
        <div className="max-w-screen-sm m-auto text-center p-8">
          <div>
            <h2 className="text-4xl my-4">Welcome to Tezos Moon [alpha]</h2>
            <p>
              You need to pick up my lucky penny if you want to use this site.
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
