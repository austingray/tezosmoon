export default `
query objktAsk($objktId: bigint!) {
    hic_et_nunc_ask(where: {objkt_id: {_eq: $objktId}, status: {_eq: "active"}}, order_by: {price: asc}) {
      amount
      amount_left
      creator_id
      price
      status
      timestamp
    }
  }
`;
