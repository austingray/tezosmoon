const creatorGallery = `
query creatorGallery($address: String!) {
  hic_et_nunc_token(where: {creator: {address: {_eq: $address}}, supply: {_gt: 0}}, order_by: {id: desc}) {
    id
    artifact_uri
    display_uri
    mime
    title
    description
    supply
    timestamp
    swaps(order_by: {price: asc}, limit: 1, where: {amount_left: {_gte: "1"}, status: {_eq: "0"}}) {
      status
      amount_left
      creator_id
      creator {
        address
      }
      price
    }
  }
}
`;

export default creatorGallery;
