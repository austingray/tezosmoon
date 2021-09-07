import { Swap } from "../../context/classes/Token";
import Button from "../buttons/Button";

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
          token.listings.length > 0
            ? `${token.listings[0].price / 1000000} tez`
            : "Not For Sale"
        }
      />
      <div className="mt-4">
        <a href={`https://www.hicetnunc.xyz/objkt/${token.id}`} target="_blank">
          <Button>Buy it on Hic Et Nunc</Button>
        </a>
      </div>
    </div>
  );
}

export default Metadata;
