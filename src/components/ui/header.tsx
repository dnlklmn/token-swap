import { PolkadotIcon } from "./icons";
import ThemeSwitch from "./theme-switch";
import { VersionSwitch } from "./version-switch";

export default function Header() {
  return (
    <div className="px-4 lg:px-8 w-full flex items-start md:items-center justify-between sticky top-0 bg-background-default text-foreground-contrast py-6 lg:py-10">
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
        <VersionSwitch />
        <ThemeSwitch />
      </div>
    </div>
  );
}
