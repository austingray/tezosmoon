export default `
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
