import Link from "next/link";
import AppContext from "../../context";
import ButtonLogin from "../buttons/ButtonLogin";

function Header() {
  return (
    <AppContext.Consumer>
      {({ activeAccount }) => {
        return (
          <nav className="flex items-center justify-between flex-wrap bg-teal p-6 border-b border-gray-500">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <Link href="/">
                <a className="font-semibold text-xl tracking-tight no-underline">
                  Tezos Moon [alpha]
                </a>
              </Link>
            </div>
            <div className="flex-grow flex items-center w-auto">
              <div className="text-sm flex-grow">
                {activeAccount && (
                  <>
                    <Link href={`/profile/${activeAccount.address}/creations`}>
                      <a className="inline-block mt-0 text-teal-lighter hover:text-white mr-4">
                        Creations
                      </a>
                    </Link>
                    <Link href={`/profile/${activeAccount.address}/collection`}>
                      <a className="lg:inline-block mt-0 text-teal-lighter hover:text-white mr-4">
                        Collection
                      </a>
                    </Link>
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
