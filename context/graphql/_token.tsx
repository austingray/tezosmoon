export default `
id
mime
timestamp
display_uri
description
artifact_uri
metadata
creator {
  address
  name
}
thumbnail_uri
title
supply
royalties
swaps {
  amount
  amount_left
  id
  price
  timestamp
  creator {
    address
    name
  }
  contract_version
  status
  royalties
  creator_id
  is_valid
}
token_holders(where: {quantity: {_gt: "0"}}) {
  holder_id
  quantity
  holder {
    name
  }
}
token_tags {
  tag {
    tag
  }
}
trades(order_by: {timestamp: asc}) {
  amount
  swap {
    price
  }
  seller {
    address
    name
  }
  buyer {
    address
    name
  }
  timestamp
}
`;
