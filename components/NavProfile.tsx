import Link from "next/link";

function NavProfile({ address }) {
  return (
    <>
      <h1 className="mb-1">Address: {address}</h1>
      <div className="mb-4">
        <Link href={`/profile/${address}`}>
          <a className="pr-2">Profile</a>
        </Link>
        <Link href={`/profile/${address}/creations`}>
          <a className="pr-2">Creations</a>
        </Link>
        <Link href={`/profile/${address}/collection`}>
          <a className="pr-2">Collection</a>
        </Link>
      </div>
    </>
  );
}

export default NavProfile;
