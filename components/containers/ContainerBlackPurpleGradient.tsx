import Logo from "../Logo";
import TMHead from "../TMHead";

function ContainerBlackPurpleGradient({
  children,
  pageTitle,
  showLogo = true,
}) {
  return (
    <div
      className={`bg-gradient-to-r from-transparent via-purple-900 to-transparent ${
        showLogo && "pt-12 lg:pt-24"
      }`}
    >
      <TMHead title={pageTitle} />

      {showLogo && <Logo />}

      <main className="min-h-screen pt-12">{children}</main>

      {!showLogo && (
        <div className="pb-16 pt-12">
          <Logo />
        </div>
      )}
    </div>
  );
}

export default ContainerBlackPurpleGradient;
