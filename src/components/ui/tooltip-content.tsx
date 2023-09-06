import Crowdloans from "@w3f/polkadot-icons/keyline/Crowdloans";
import Governance from "@w3f/polkadot-icons/keyline/Governance";
import Staking from "@w3f/polkadot-icons/keyline/Staking";
import {
  AcalaCircle,
  MoonbeamCircle,
  PolkadotCircle,
  RightClickIcon,
} from "./icons";
import { TokenCircle } from "@/main";

export function TokenTooltipContent({
  children,
  currency,
  withHint,
}: {
  currency?: String;
  withHint?: boolean;
  children?: JSX.Element | null;
}) {
  return (
    <div className="flex flex-col p-2 gap-4 text-foreground-contrast">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TokenCircle chain={currency} size="36" />
          <span className="text-2xl font-semibold">{currency}</span>
        </div>
        {children}
      </div>
      <div className="h-[1px] bg-fill-separator" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 py-1 items-center text-sm ">
          <div className="flex items-center gap-1">
            <div className="w-3 overflow-visible ">
              <PolkadotCircle
                size="20"
                className=" drop-shadow-[-1px_0px_0px_rgba(255,255,255,1)]"
              />
            </div>
            <div className="w-3 overflow-visible ">
              <MoonbeamCircle
                size="20"
                className=" drop-shadow-[-1px_0px_0px_rgba(255,255,255,1)]"
              />
            </div>
            <div className="w-3 overflow-visible ">
              <AcalaCircle
                size="20"
                className="drop-shadow-[-1px_0px_0px_rgba(255,255,255,1)]"
              />
            </div>
          </div>
          <span className="font-regular">
            Available on <span className="font-semibold">Polkadot</span> and{" "}
            <span className="font-semibold">12 other networks</span>
          </span>
        </div>
        <div className="flex gap-5 items-center text-sm text-foreground-disabled font-regular">
          <div className="flex gap-1.5 items-center hover:text-foreground-primary cursor-pointer">
            <Governance className="w-5" stroke={"currentColor"} />
            <span>Governance</span>
          </div>
          <div className="flex gap-1.5 items-center hover:text-foreground-primary cursor-pointer">
            <Staking className="w-5" stroke={"currentColor"} />
            <span>Staking</span>
          </div>
          <div className="flex gap-1.5 items-center hover:text-foreground-primary cursor-pointer">
            <Crowdloans className="w-5" stroke={"currentColor"} />
            <span>Crowdloan</span>
          </div>
        </div>
      </div>
      {withHint && (
        <>
          <div className="h-[1px] bg-fill-separator" />
          <div className="flex items-center gap-1.5 text-sm text-foreground-disabled font-regular">
            <div className="w-5 flex justify-center">
              <RightClickIcon size="20" />
            </div>
            <span>Right click to see available actions</span>
          </div>
        </>
      )}
    </div>
  );
}
