import ContainerBlackPurpleGradient from "./containers/ContainerBlackPurpleGradient";
import NFTRaw from "./NFTRaw";

function Login() {
  return (
    <ContainerBlackPurpleGradient pageTitle="Tezos Moon - Login">
      <div className="max-w-screen-md m-auto">
        <h1 className="text-4xl mb-4">Tezos Moon</h1>

        <div className="px-12 lg:px-0">
          Browse, manage, display, and analyze Tezos NFTs (only{" "}
          <a href="https://hicetnunc.xyz" target="_blank">
            hicetnunc
          </a>{" "}
          for now). You can view the source code to this website on{" "}
          <a href="https://github.com/austingray/tezosmoon" target="_blank">
            github
          </a>
        </div>

        <div>
          <h2 className="text-4xl my-4">Stop! You must have this token.</h2>
          <p>
            If you want to use this website, you must collect auger's lucky
            penny NFT from the marketplace:
          </p>
        </div>

        <a href="https://www.hicetnunc.xyz/objkt/249515" target="_blank">
          <div className="max-w-xs">
            <NFTRaw
              nft={{
                id: 249515,
                artifact_uri:
                  "ipfs://QmcgzwmS8hRK9wzzXNAn24oTu5fnzekWBNdAUd2sqw2i5v",
                display_uri:
                  "ipfs://QmPymaZJY2LEhW2sG6d4Ezh8iKbmpMWbb48jJB5HAYyovL",
                mime: "video/mp4",
                title: "lucky penny",
                description: "you found a lucky penny.",
                supply: 100,
                timestamp: "2021-09-01T02:25:38+00:00",
                swaps: [
                  {
                    status: 0,
                    amount_left: 87,
                    creator_id: "tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf",
                    creator: {
                      address: "tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf",
                    },
                    price: 10000,
                  },
                ],
              }}
            />
          </div>
        </a>
      </div>
    </ContainerBlackPurpleGradient>
  );
}

export default Login;
