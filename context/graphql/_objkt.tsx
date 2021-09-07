import token from "./_token";

export default `
query objkt($id: bigint!) {
    hic_et_nunc_token(where: {id: {_eq: $id}}) {
      ${token}
    }
}
`;
