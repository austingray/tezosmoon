import token from "./_token";

const creatorGallery = `
query creatorGallery($address: String!) {
  hic_et_nunc_token(where: {creator: {address: {_eq: $address}}, supply: {_gt: 0}}, order_by: {id: desc}) {
    ${token}
  }
}
`;

export default creatorGallery;
