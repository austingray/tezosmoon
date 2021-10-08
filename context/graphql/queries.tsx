import creatorGallery from "./_creatorGallery";
import collectorGallery from "./_collectorGallery";
import objkt from "./_objkt";

export async function fetchGraphQL(
  operationName: string,
  query: string,
  variables: object
): Promise<any> {
  let response = await fetch("https://api.hicdex.com/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      operationName,
      query,
      variables,
    }),
  });

  const { errors, data } = await response.json();
  if (errors) {
    console.error(errors);
  }

  return data;
}

export async function fetchCreatorGallery(addr: string): Promise<any[]> {
  const data = await fetchGraphQL("creatorGallery", creatorGallery, {
    address: addr,
  });

  const tokens = data.hic_et_nunc_token.map((t) => addExtraPropsToToken(t));

  return tokens;
}

export async function fetchCollectorGallery(addr: string): Promise<any[]> {
  const data = await fetchGraphQL("collectorGallery", collectorGallery, {
    address: addr,
  });

  const tokens = data.hic_et_nunc_token_holder.map((t) =>
    addExtraPropsToToken(t.token)
  );

  return tokens;
}

export async function fetchObjkt(id: number) {
  const data = await fetchGraphQL("objkt", objkt, { id });
  const token = data && data.hic_et_nunc_token_by_pk;
  return addExtraPropsToToken(token);
}

const addExtraPropsToToken = (token) => {
  const swapsFiltered = token.swaps
    .filter(
      (e) =>
        parseInt(e.contract_version) === 2 &&
        parseInt(e.status) === 0 &&
        e.is_valid
    )
    .sort((a, b) => {
      if (a.price < b.price) return -1;
      if (b.price > a.price) return 1;
      return 0;
    });

  let lowestPrice = -1;
  if (token && token.swapsFiltered && token.swapsFiltered.length > 0) {
    if (token.swapsFiltered[0].price) {
      lowestPrice = token.swapsFiltered[0].price / 1000000;
    }
  }

  return token
    ? {
        ...token,
        ...{
          swapsFiltered,
          lowestPrice,
        },
      }
    : null;
};
