import AppContext from "../../context/classes/AppContext";
import Login from "../Login";

export const tokenTicketId: number = process.env.NEXT_PUBLIC_TOKEN_ID
  ? Number(process.env.NEXT_PUBLIC_TOKEN_ID)
  : null;

const hasAccess = (collection: any[], address) => {
  // if token id is not set then grant access
  if (!tokenTicketId) {
    return true;
  }

  for (let i = 0; i < collection.length; i++) {
    const token = collection[i];
    if (token.id === tokenTicketId) {
      return true; // must own the token
    }
  }

  if (address === "tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf") {
    return true; // or be auger
  }

  // to enable blocking by token ownership, return false
  return false;
};

function ContainerAuthLuckyPenny({ children }) {
  return (
    <>
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
    </>
  );
}

export default ContainerAuthLuckyPenny;
