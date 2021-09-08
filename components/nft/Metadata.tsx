import AppContext from "../../context/classes/AppContext";
import ButtonFullWidth from "../buttons/ButtonFullWidth";

function Row({ k, v }) {
  return (
    <div className="grid grid-cols-3 mb-1">
      <div className={"text-right bg-gray-800 py-1 px-1"}>{k}:</div>
      <div className={`text-left bg-gray-800 col-span-2 py-1 px-1`}>{v}</div>
    </div>
  );
}

function Metadata({ token, externalLinks = false }) {
  const swaps = token.swaps
    .filter(
      (e) =>
        parseInt(e.contract_version) === 2 &&
        parseInt(e.status) === 0 &&
        e.is_valid
    )
    .sort((a, b) => {
      if (a.price < b.price) return -1;
      if (b.price > a.price) return 1;
      return 0;
    });

  if (token.creator.name === "jjjjjohn") {
    console.log({ token, swaps });
  }

  return (
    <div>
      <Row k="Title" v={token.title} />
      <Row
        k="Creator"
        v={token.creator.name ? token.creator.name : token.creator.address}
      />
      <Row k="Description" v={token.description} />
      {swaps.length > 0 ? (
        <AppContext.Consumer>
          {({ collect }) => {
            return (
              <ButtonFullWidth
                onClick={() => {
                  collect(swaps[0].id, swaps[0].price);
                }}
              >
                🔥 scoop for {swaps[0].price / 1000000} tez
              </ButtonFullWidth>
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
