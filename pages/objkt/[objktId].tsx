import React from "react";
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
    return (
      <div className="max-w-screen-md m-auto">
        {this.state.objkt && (
          <NFTPoster token={this.state.objkt} placeholder={false} />
        )}
      </div>
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
