const collectorGallery = `
query collectorGallery($address: String!) {
  hic_et_nunc_token_holder(where: {holder_id: {_eq: $address}, token: {creator: {address: {_neq: $address}}}, quantity: {_gt: "0"}}, order_by: {token_id: desc}) {
    quantity
    token {
      id
      artifact_uri
      creator_id
      display_uri
      thumbnail_uri
      timestamp
      mime
      title
      description
      supply
      token_tags {
        tag {
          tag
        }
      }
    }
  }
}
`;
export default collectorGallery;
