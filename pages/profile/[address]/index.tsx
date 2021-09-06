import { validateAddress } from "@taquito/utils";
import TMHead from "../../../components/TMHead";

function Profile({ tzktProfile, address }) {
  console.log(tzktProfile);
  return (
    <div>
      <TMHead title={`Tezos Moon - ${address} Profile`} />

      <main className="p-6">
        <h1 className="mb-4 text-2xl">{address}</h1>
        <div>
          <h2>
            Results from{" "}
            <a href="https://tzkt.io/tz1aLvmWNq1SbA8mTktMs9NwogU7rf8FiZHf/operations/">
              TzKT
            </a>
            :
          </h2>
          {Object.entries(tzktProfile).map(([key, value]) => (
            <div className="grid grid-cols-3">
              <div className="">{key}</div>
              <div className="break-all col-span-2">
                {JSON.stringify(value)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Profile;

export async function getServerSideProps(context) {
  const { address } = context.query;

  if (!validateAddress(address)) {
    return { props: {} };
  }

  const res = await fetch(`https://api.tzkt.io/v1/accounts/${address}`);
  const tzktProfile = await res.json();

  console.log({ tzktProfile });

  return {
    props: { address, tzktProfile },
  };
}
