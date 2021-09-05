import AppContext from "../context";
import ButtonLogin from "./ButtonLogin";

function Header() {
  return (
    <AppContext.Consumer>
      {({ activeProfile }) => {
        return (
          <nav className="flex items-center justify-between flex-wrap bg-teal p-6 border-b border-gray-500">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">
                Tezos Moon [alpha]
              </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                {activeProfile && (
                  <>
                    <a
                      href="#"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                    >
                      Creations
                    </a>
                    <a
                      href="#"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
                    >
                      Collections
                    </a>
                  </>
                )}
              </div>
              <div>
                <ButtonLogin />
              </div>
            </div>
          </nav>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Header;
