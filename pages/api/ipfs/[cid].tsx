import isIPFS from "is-ipfs";

export default function handler(req, res) {
  const cid = req.query.ipfs;
  if (!isIPFS.cid(cid)) {
    res.status(404).send("404 Not Found");
  } else {
    res.status(200).json({ validCID: isIPFS.cid(req.query.ipfs) });
  }
}
