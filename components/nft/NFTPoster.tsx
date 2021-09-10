import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import ImageWrapper from "./ImageWrapper";
import Metadata from "./Metadata";
import VideoWrapper from "./VideoWrapper";

function NFTPoster({ token = null, placeholder = true, externalLinks = true }) {
  if (!token) {
    return (
      <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="p-12">
          <Logo />
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <p className="bg-black rounded-md mt-8 p-4">
          Loading ... hic et nunc api response times can vary. Working on an
          intermediate.
        </p>
      </div>
    );
  }
  return (
    <div key={token.id} className="bg-black mt-4 rounded-2xl max-w-screen-md">
      <div className="p-5">
        {placeholder ? (
          <Link href={`/objkt/${token.id}`}>
            <a>
              <ImageWrapper token={token} placeholder={placeholder} />
            </a>
          </Link>
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
              "tezosmoon.com/objkt",
              "hicetnunc.xyz/objkt",
              "henext.xyz/o",
              "objkt.com/asset/hicetnunc",
            ].map((url) => (
              <div className="mt-1" key={url}>
                <a href={`https://${url}/${token.id}`} target="_blank">
                  view this nft on{" "}
                  {`${url.split(".")[0]}.${url.split(".")[1].split("/")[0]}`}
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
