import { PolkadotIcon } from "./icons";
import ThemeSwitch from "./theme-switch";
import { VersionSwitch } from "./version-switch";

export default function Header() {
  return (
    <div className="bg-background-default text-foreground-contrast sticky top-0 flex w-full items-start justify-between px-4 py-6 md:items-center lg:px-8 lg:py-10">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
        <PolkadotIcon />
        <div className="bg-fill-separator hidden h-6 w-[2px] md:block" />
        <div className="flex items-center gap-1.5">
          <span className="font-unbounded text-lg font-medium md:text-xl">Token Swap</span>
          <span className="font-unbounded text-lg md:text-xl">Demo</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
      </div>
    </div>
  );
}
