import { Link } from "react-router-dom";

export function VersionSwitch({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${mobile ? "flex" : "hidden"} ${
        mobile ? "lg:hidden" : "lg:flex"
      } bg-background-dip rounded-full overflow-clip text-sm p-[1px] mx-4 lg:mx-0 mb-4 lg:my-0 text-foreground-contrast `}
    >
      <Link
        className={`w-full lg:w-fit text-center font-semibold py-2 lg:py-1 px-3 rounded-full ${
          location.pathname === "/"
            ? "bg-fill-ghost text-foreground-contrast"
            : "bg-none"
        }`}
        to="/"
      >
        In Context Menu
      </Link>
      <Link
        className={`w-full lg:w-fit text-center font-semibold py-2 lg:py-1 px-3 rounded-full ${
          location.pathname === "/button"
            ? "bg-fill-ghost text-foreground-contrast"
            : "bg-none"
        }`}
        to="/button"
      >
        With Button
      </Link>
    </div>
  );
}
