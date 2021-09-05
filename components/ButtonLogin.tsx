import AppContext from "../context";

function ButtonLogin() {
  return (
    <AppContext.Consumer>
      {({ activeAccount, login, logout }) => {
        const cssClasses =
          "inline-block text-sm px-4 py-2 leading-none bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded";
        if (activeAccount) {
          const address =
            activeAccount.address.substring(0, 5) +
            "..." +
            activeAccount.address.substring(
              activeAccount.address.length - 5,
              activeAccount.address.length
            );
          return (
            <button
              className={cssClasses}
              onClick={logout}
              title="Click to disconnect"
            >
              Connected: {address}
            </button>
          );
        } else {
          return (
            <button
              className={cssClasses}
              onClick={login}
              title="Click to connect"
            >
              Connect
            </button>
          );
        }
      }}
    </AppContext.Consumer>
  );
}

export default ButtonLogin;
