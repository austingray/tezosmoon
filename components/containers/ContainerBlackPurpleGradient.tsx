import SVGTezos from "../svg/Tezos";
import TMHead from "../TMHead";

function ContainerBlackPurpleGradient({ children, pageTitle }) {
  return (
    <div className="bg-gradient-to-r from-transparent via-purple-900 to-transparent">
      <TMHead title={pageTitle} />

      <div className="flex flex-wrap justify-center pt-12 lg:pt-24 align-middle">
        <span className="text-8xl">
          <SVGTezos
            color="#dedede"
            className="w-full"
            style={{ width: "68px" }}
          />
        </span>
        <span className="text-6xl">🌙</span>
      </div>

      <main className="min-h-screen pt-12">{children}</main>
    </div>
  );
}

export default ContainerBlackPurpleGradient;
