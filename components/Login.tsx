import ContainerBlackPurpleGradient from "./containers/ContainerBlackPurpleGradient";
import NFTPoster from "./nft/NFTPoster";

function Login() {
  return (
    <ContainerBlackPurpleGradient pageTitle="Tezos Moon - Login">
      <div className="max-w-screen-md m-auto text-center">
        <div>
          <h2 className="text-4xl my-4">Welcome to Tezos Moon</h2>
          <p>
            You must pick up auger's{" "}
            <a href="https://www.hicetnunc.xyz/objkt/249515">lucky penny</a>{" "}
            from the{" "}
            <a href="https://www.hicetnunc.xyz" target="_blank">
              hic et nunc
            </a>{" "}
            NFT marketplace in order to use this website.
          </p>
        </div>

        <div className="max-w-sm m-auto pb-8 mt-8">
          <NFTPoster
            token={{
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
      </div>
    </ContainerBlackPurpleGradient>
  );
}

export default Login;
