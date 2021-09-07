import AppContext from "../../context";
import Login from "../Login";

const hasAccess = (collection: any[], address) => {
  console.log(`checking access for ${address}`);
  for (let i = 0; i < collection.length; i++) {
    const nft = collection[i];
    if (nft.token.id === 249515) {
      return true; // must own https://www.hicetnunc.xyz/objkt/249515
    }
  }

  if (address === "tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf") {
    return true; // or be auger
  }

  return false;
};

function ContainerAuthLuckyPenny({ children }) {
  return (
    <AppContext.Consumer>
      {({ activeAccount, collection, address }) => {
        return activeAccount && hasAccess(collection, address) ? (
          <div>
            <div>{children}</div>
          </div>
        ) : (
          <Login />
        );
      }}
    </AppContext.Consumer>
  );
}

export default ContainerAuthLuckyPenny;
