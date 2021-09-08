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

  const tokens = data.hic_et_nunc_token.map((t) => addFilteredSwapsToToken(t));

  return tokens;
}

export async function fetchCollectorGallery(addr: string): Promise<any[]> {
  const data = await fetchGraphQL("collectorGallery", collectorGallery, {
    address: addr,
  });

  const tokens = data.hic_et_nunc_token_holder.map((t) =>
    addFilteredSwapsToToken(t.token)
  );

  return tokens;
}

export async function fetchObjkt(id: number) {
  const data = await fetchGraphQL("objkt", objkt, { id });
  const token = data.hic_et_nunc_token_by_pk;
  return addFilteredSwapsToToken(token);
}

const addFilteredSwapsToToken = (token) => {
  return {
    ...token,
    ...{
      swapsFiltered: token.swaps
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
        }),
    },
  };
};
