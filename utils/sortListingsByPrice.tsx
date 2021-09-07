import { Listing } from "../context/classes/Token";

function sortListingsByPrice(a: Listing, b: Listing) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

export default sortListingsByPrice;
