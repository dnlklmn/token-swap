import { MoreIcon } from "@/components/ui/icons";
import { tokens } from "./main";
import { TokenLine } from "./components/ui/token-line";
import DropdownMenuLocal from "./components/ui/dropdown-local";
import SheetLocal from "./components/ui/sheet-local";

export default function WithButton() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-6 px-4 lg:px-8 text-foreground-contrast">
      <div className="w-full lg:w-2/3 h-[512px] bg-background-dip rounded-md" />
      <div className="flex w-full lg:w-1/3 flex-col p-4 gap-2 h-fit rounded-lg text-lg font-medium overflow-hidden bg-background-float shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)]">
        <span className="text-lg px-2 font-medium my-4">
          Polkadot Assets Hub
        </span>
        {tokens.map((token) => (
          <TokenLine currency={token.currency} amount={token.amount}>
            {window.innerWidth > 640 ? (
              <DropdownMenuLocal token={token.currency}>
                <div className="flex flex-none gap-2.5">
                  <span>{token.amount}</span>
                  <MoreIcon size="12" />
                </div>
              </DropdownMenuLocal>
            ) : (
              <SheetLocal currency={token.currency}>
                <div className="flex flex-none gap-2.5">
                  <span>{token.amount}</span>
                  <MoreIcon size="12" />
                </div>
              </SheetLocal>
            )}
          </TokenLine>
        ))}
      </div>
    </div>
  );
}
