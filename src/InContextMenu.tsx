import { tokens } from "./main";
import { TokenLine } from "./components/ui/token-line";
import ContextMenuLocal from "./components/ui/context-menu-local";
import SheetLocal from "./components/ui/sheet-local";

export default function InContextMenu() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-6 px-4 lg:px-8 h-full text-foreground-contrast">
      <div className="w-full lg:w-2/3 h-[512px] bg-background-dip rounded-md h-128" />
      <div className="flex w-full lg:w-1/3 flex-col gap-6">
        <div className="flex flex-col h-fit p-4 gap-2 rounded-lg text-lg font-medium overflow-hidden bg-background-float shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="text-lg px-2 font-medium my-4">
            Polkadot Assets Hub
          </span>
          {tokens.map((token) => (
            <>
              {window.innerWidth > 640 ? (
                <ContextMenuLocal token={token.currency}>
                  <TokenLine
                    withHint
                    currency={token.currency}
                    amount={token.amount}
                  >
                    <span>{token.amount}</span>
                  </TokenLine>
                </ContextMenuLocal>
              ) : (
                <SheetLocal currency={token.currency}>
                  <TokenLine
                    withHint
                    currency={token.currency}
                    amount={token.amount}
                  >
                    <span>{token.amount}</span>
                  </TokenLine>
                </SheetLocal>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
