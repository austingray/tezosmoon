import AppContext from "../../context/classes/AppContext";
import ButtonFullWidth from "../buttons/ButtonFullWidth";
import ButtonLogin from "../buttons/ButtonLogin";
import { SVGTezos } from "../Logo";

function Row({ k, v }) {
  return (
    <div className="grid grid-cols-3 mb-1">
      <div className={"text-right bg-gray-800 py-1 px-1"}>{k}:</div>
      <div className={`text-left bg-gray-800 col-span-2 py-1 px-1`}>{v}</div>
    </div>
  );
}

function Metadata({ token }) {
  return (
    <div>
      <Row k="Title" v={token.title} />
      <Row
        k="Creator"
        v={token.creator.name ? token.creator.name : token.creator.address}
      />
      <Row k="Description" v={token.description} />
      {token.swapsFiltered.length > 0 ? (
        <AppContext.Consumer>
          {({ collect, activeAccount }) => {
            return activeAccount ? (
              <ButtonFullWidth
                onClick={() => {
                  collect(
                    token.swapsFiltered[0].id,
                    token.swapsFiltered[0].price
                  );
                }}
              >
                🔥 scoop for {token.swapsFiltered[0].price / 1000000}{" "}
                <SVGTezos width={12} className="inline" />
              </ButtonFullWidth>
            ) : (
              <div>
                <p>Connect a wallet if you want to scoooooop this</p>
                <ButtonLogin />
              </div>
            );
          }}
        </AppContext.Consumer>
      ) : (
        <Row k="Price" v="Sold Out" />
      )}
    </div>
  );
}

export default Metadata;
