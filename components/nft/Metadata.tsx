import ButtonFullWidth from "../buttons/ButtonFullWidth";

function Row({ k, v }) {
  return (
    <div className={`grid grid-cols-3 mb-1`}>
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
      <Row k="Mime Type" v={token.mime} />
      <Row
        k="Price"
        v={
          token.listings && token.listings.length > 0
            ? `${token.listings[0].price / 1000000} tez`
            : "Not For Sale"
        }
      />
      {[
        "hicetnunc.xyz/objkt/",
        "henext.xyz/o/",
        "objkt.com/asset/hicetnunc/",
      ].map((url) => (
        <div className="mt-1" key={url}>
          <a href={`https://${url}`} target="_blank" className="no-underline">
            <ButtonFullWidth>
              view on{" "}
              {`${url.split(".")[0]}.${url.split(".")[1].split("/")[0]}`}
            </ButtonFullWidth>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Metadata;
