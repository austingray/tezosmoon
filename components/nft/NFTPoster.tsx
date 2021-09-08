import React from "react";
import { Swap } from "../../context/classes/Token";
import { fetchObjktAsk } from "../../context/graphql/queries";
import sortListingsByPrice from "../../utils/sortListingsByPrice";
import ButtonFullWidth from "../buttons/ButtonFullWidth";
import ImageWrapper from "./ImageWrapper";
import Metadata from "./Metadata";
import VideoWrapper from "./VideoWrapper";

function NFTPoster({ token, placeholder = true, externalLinks = true }) {
  return (
    <div key={token.id} className="bg-black mt-4 rounded-2xl">
      <div className="p-5">
        {placeholder ? (
          <ImageWrapper token={token} placeholder={placeholder} />
        ) : (
          <>
            {token.mime.split("/")[0] === "video" && (
              <VideoWrapper token={token} />
            )}
            {token.mime.split("/")[0] === "image" && (
              <ImageWrapper token={token} />
            )}
          </>
        )}
      </div>

      <div className="px-5 pb-5">
        <Metadata token={token} />
        {externalLinks && (
          <div className="mt-4">
            {[
              "hicetnunc.xyz/objkt/",
              "henext.xyz/o/",
              "objkt.com/asset/hicetnunc/",
            ].map((url) => (
              <div className="mt-1" key={url}>
                <a
                  href={`https://${url}/${token.id}`}
                  target="_blank"
                  className="no-underline"
                >
                  <ButtonFullWidth>
                    view on{" "}
                    {`${url.split(".")[0]}.${url.split(".")[1].split("/")[0]}`}
                  </ButtonFullWidth>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NFTPoster;
