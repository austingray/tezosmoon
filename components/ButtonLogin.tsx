import AppContext from "../context";

function ButtonLogin() {
  return (
    <AppContext.Consumer>
      {({ activeAccount, login, logout }) => {
        if (activeAccount) {
          return <button onClick={logout}>{activeAccount.address}</button>;
        } else {
          return <button onClick={login}>Login</button>;
        }
      }}
    </AppContext.Consumer>
  );
}

export default ButtonLogin;
