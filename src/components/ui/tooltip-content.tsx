import Crowdloans from "@w3f/polkadot-icons/keyline/Crowdloans";
import Governance from "@w3f/polkadot-icons/keyline/Governance";
import Staking from "@w3f/polkadot-icons/keyline/Staking";
import { Button } from "./button";
import {
  AcalaCircle,
  MoonbeamCircle,
  PolkadotCircle,
  RightClickIcon,
} from "./icons";

interface TooltipContentProps {
  children?: JSX.Element;
  currency?: String;
  withHint?: boolean;
}
export function TokenTooltipContent({
  children,
  currency,
  withHint,
}: TooltipContentProps) {
  return (
    <div className="flex flex-col p-2 gap-4 text-foreground-contrast">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {children}
          <span className="text-lg">{currency}</span>
        </div>
        <Button variant={"outline"} size={"sm"} className="rounded-full">
          Swap
        </Button>
      </div>
      <div className="h-[1px] bg-fill-separator" />
      <div className="flex gap-5 items-center text-sm">
        <div className="flex items-center">
          <div className="w-3 overflow-visible ">
            <PolkadotCircle size="24" />
          </div>
          <div className="w-3 overflow-visible ">
            <MoonbeamCircle size="24" />
          </div>
          <div className="w-3 overflow-visible ">
            <AcalaCircle size="24" />
          </div>
        </div>
        <span>
          Available on <strong>Polkadot</strong> and{" "}
          <strong>12 other networks</strong>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 items-center">
          <Governance
            className="w-6"
            stroke={"var(--colors-foreground-dimmed)"}
          />
          <span>Governance</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <Staking className="w-6" stroke={"var(--colors-foreground-dimmed)"} />
          <span>Staking</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <Crowdloans
            className="w-6"
            stroke={"var(--colors-foreground-dimmed)"}
          />
          <span>Crowdloan</span>
        </div>
      </div>
      {withHint && (
        <>
          <div className="h-[1px] bg-fill-separator" />
          <div className="flex items-center gap-1">
            <div className="w-6 flex justify-center">
              <RightClickIcon className="text-foreground-dimmed" />
            </div>
            <span>Right click to see available actions</span>
          </div>
        </>
      )}
    </div>
  );
}
