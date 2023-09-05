import { Link, useLocation } from "react-router-dom";
import { PolkadotIcon } from "./icons";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const location = useLocation();

  return (
    <div className="px-8 w-full flex items-start md:items-center justify-between sticky top-0 bg-background-default text-foreground-contrast py-6 md:py-10">
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
        <PolkadotIcon />
        <div className="h-6 w-[2px] bg-fill-separator hidden md:block" />
        <div className="flex items-center gap-1.5">
          <span className="text-lg md:text-xl font-unbounded font-medium">
            Asset Menu
          </span>
          <span className="text-lg md:text-xl font-unbounded">Demo</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex bg-background-dip rounded-full overflow-clip text-sm p-[1px]">
          <Link
            className={`py-1 px-3 rounded-full ${
              location.pathname === "/"
                ? "bg-fill-ghost text-foreground-contrast"
                : "bg-none"
            }`}
            to="/"
          >
            In Context Menu
          </Link>
          <Link
            className={`py-1 px-3 rounded-full ${
              location.pathname === "/button"
                ? "bg-fill-ghost text-foreground-contrast"
                : "bg-none"
            }`}
            to="/button"
          >
            With Button
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
