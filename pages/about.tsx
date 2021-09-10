import Link from "next/link";
import Button from "../components/buttons/Button";
import router from "next/router";
import { validateAddress } from "@taquito/utils";
import ContainerBlackPurpleGradient from "../components/containers/ContainerBlackPurpleGradient";

export default function About() {
  const handleSearch = (e) => {
    e.preventDefault();

    const address = e.target.xtzWalletAddress.value;
    if (validateAddress(address)) {
      router.push(`/profile/${address}`);
    }
  };

  return (
    <ContainerBlackPurpleGradient pageTitle="Tezos Moon - Tezos NFT Browser">
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
          </form>
        </div>

        <div className="lg:pr-36 px-12 lg:px-0">
          Tezos Moon is an app to browse, manage, display, and analyze Tezos
          NFTs that have been minted on the Hic et Nunc marketplace.{" "}
          <Link href="/about">
            <a>Learn More</a>
          </Link>
          .
        </div>
      </div>
    </ContainerBlackPurpleGradient>
  );
}
