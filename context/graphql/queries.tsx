import creatorGallery from "./_creatorGallery";
import collectorGallery from "./_collectorGallery";
import objktAsk from "./_objktAsk";
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

export async function fetchCreatorGallery(addr: string) {
  const data = await fetchGraphQL("creatorGallery", creatorGallery, {
    address: addr,
  });

  return data.hic_et_nunc_token;
}

export async function fetchCollectorGallery(addr: string) {
  const data = await fetchGraphQL("collectorGallery", collectorGallery, {
    address: addr,
  });

  return data.hic_et_nunc_token_holder;
}

export async function fetchObjktAsk(objktId: number) {
  const data = await fetchGraphQL("objktAsk", objktAsk, { objktId });

  return data.hic_et_nunc_ask;
}

export async function fetchObjkt(id: number) {
  const data = await fetchGraphQL("objkt", objkt, { id });
  return data.hic_et_nunc_token_by_pk;
}
