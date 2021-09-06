import TMHead from "../components/TMHead";
import AppContext from "../context";
import Button from "../components/Button";
import router from "next/router";
import { validateAddress } from "@taquito/utils";
import SVGTezos from "../components/SVG/Tezos";

export default function Home() {
  const handleSearch = (e) => {
    e.preventDefault();
    const address = e.target.xtzWalletAddress.value;
    if (validateAddress(address)) {
      router.push(`/profile/${address}`);
    }
  };

  return (
    <AppContext.Consumer>
      {({ activeAccount, collection }) => {
        return (
          <div className="bg-gradient-to-r from-transparent via-purple-900 to-transparent">
            <TMHead title="Tezos Moon - Tezos NFT Browser" />

            <div className="flex flex-wrap justify-center pt-12 lg:pt-24 align-middle">
              <span className="text-8xl">
                <SVGTezos
                  color="#dedede"
                  className="w-full"
                  style={{ width: "68px" }}
                />
              </span>
              <span className="text-6xl">🌙</span>
            </div>

            <main className="h-screen pt-12">
              <div className="lg:grid lg:gap-8 lg:grid-cols-2">
                <div className="lg:pl-36 lg:text-right px-12 lg:px-0">
                  <form onSubmit={handleSearch} className="mb-4">
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="xtzWalletAddress"
                    >
                      Search by wallet address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="xtzWalletAddress"
                      name="xtzWalletAddress"
                      type="text"
                      placeholder="e.g., tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf"
                    />
                    <div className="mt-3 text-right">
                      <Button type="submit">Search</Button>
                    </div>
                    <div className="mt-4">Might go here: Recent searches</div>
                  </form>
                </div>

                <div className="lg:pr-36 px-12 lg:px-0">
                  Tezos Moon is an app to browse, manage, display, and analyze
                  Tezos NFTs (only{" "}
                  <a href="https://hicetnunc.xyz" target="_blank">
                    hicetnunc
                  </a>{" "}
                  for now). You can view the source code to this website on{" "}
                  <a
                    href="https://github.com/austingray/tezosmoon"
                    target="_blank"
                  >
                    github
                  </a>
                  .<div className="mt-4">Might go here: List of tools</div>
                </div>
              </div>
            </main>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
