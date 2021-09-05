const priceHistory = `
query PriceHistory($token: bigint = "") {
  hic_et_nunc_trade(where: {token_id: {_eq: $token}}, order_by: {swap: {price: desc}}) {
    timestamp
    seller {
      address
    }
    buyer {
      address
    }
    swap {
      price
    }
  }
}
`

export default priceHistory;