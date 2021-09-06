function Footer() {
  return (
    <div
      className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-sm flex-col
      md:flex-row"
    >
      <div className="pt-2">
        Tezos Moon [alpha] ️‍🔥️‍🔥️‍🔥 scoooooooop |{" "}
        <a
          href="https://github.com/austingray/tezosmoon"
          target="_blank"
          className="mx-1"
        >
          view source on github
        </a>
      </div>
      <div className="md:flex-auto md:flex-row-reverse pt-2 flex-row flex">
        <a
          href="https://twitter.com/austingray"
          target="_blank"
          className="mx-1"
        >
          made with love by auger
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
