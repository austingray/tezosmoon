function Footer() {
  return (
    <div className="grid grid-cols-2 pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-sm">
      <div className="">
        Tezos Moon [alpha] |{" "}
        <a
          href="https://github.com/austingray/tezosmoon"
          target="_blank"
          className="mx-1"
        >
          view source
        </a>
      </div>
      <div className="text-right">
        made with love by{" "}
        <a
          href="https://twitter.com/austingray"
          target="_blank"
          className="lg:mx-1"
        >
          auger
        </a>
      </div>
    </div>
  );
}

export default Footer;
