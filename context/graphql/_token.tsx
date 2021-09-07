export default `
    artifact_uri
    creator_id
    creator {
      address
      name
      metadata
    }
    description
    display_uri
    id
    mime
    royalties
    supply
    thumbnail_uri
    timestamp
    title
    token_tags {
      tag {
        id
        tag
      }
    }
    swaps(order_by: {price: asc}, limit: 1, where: {amount_left: {_gte: "1"}, status: {_eq: "0"}}) {
      contract_version
      status
      amount_left
      creator_id
      creator {
        address
      }
      price
    }
`;
