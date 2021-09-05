import creatorGallery from './_creatorGallery';
import collectorGallery from './_collectorGallery';

export async function fetchGraphQL(operationName: string, query: string, variables: object): Promise<any> {
  let response = await fetch('https://api.hicdex.com/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      operationName,
      query,
      variables,
    }),
  })

  const { errors, data } = await response.json();
  if (errors) {
    console.error(errors)
  }

  return data;
}

export async function fetchCreatorGallery(addr: string) {
  const data = await fetchGraphQL(
    'creatorGallery',
    creatorGallery,
    { address: addr }
  );

  return data.hic_et_nunc_token;
}

export async function fetchCollectorGallery(addr: string) {
  const data = await fetchGraphQL(
    'collectorGallery',
    collectorGallery,
    { address: addr }
  )

  return data.hic_et_nunc_token_holder;
}