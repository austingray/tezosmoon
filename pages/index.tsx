import TMHead from "../components/TMHead";
import AppContext from "../context";
import Button from "../components/Button";
import router, { useRouter } from "next/router";
import { validateAddress } from "@taquito/utils";

export default function Home() {
  const handleSearch = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    if (validateAddress(address)) {
      router.push(`/profile/${address}/collection`);
    }
  };

  return (
    <AppContext.Consumer>
      {({ activeAccount, collection }) => {
        return (
          <div className="bg-gradient-to-r from-transparent via-purple-900 to-transparent">
            <TMHead title="Tezos Moon - Tezos NFT Browser" />

            <div className="flex flex-wrap justify-center pt-24 align-middle">
              <span className="text-8xl">ꜩ</span>
              <span className="text-6xl">🌙</span>
            </div>

            <main className="h-screen pt-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="pl-48 text-right">
                  <form onSubmit={handleSearch} className="mb-4">
                    <label
                      className="block text-white-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Search by wallet address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      name="address"
                      type="text"
                      placeholder="e.g., tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf"
                    />
                    <div className="mt-3">
                      <Button type="submit">Search</Button>
                    </div>
                  </form>
                </div>

                <div className="pr-48">
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
                  .
                </div>
              </div>
            </main>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
