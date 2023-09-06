import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./button";
import { DialogHeader } from "./dialog";
import ArrowDown from "@w3f/polkadot-icons/keyline/ArrowDown";
import ChevronDown from "@w3f/polkadot-icons/keyline/ChevronDown";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { TokenCircle, tokens } from "@/main";

function Buttons() {
  return (
    <div className="flex items-center absolute px-3 lg:px-0 lg:relative bottom-4 lg:bottom-0 w-full gap-4">
      <DialogPrimitive.Close className="w-full">
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
      </DialogPrimitive.Close>
      <Button className="w-full">Send</Button>
    </div>
  );
}

export function SendDialogContent({
  address,
  token,
}: {
  address?: any;
  token?: String;
}) {
  return (
    <div className="w-full py-2 lg:py-0 h-full lg:h-fit flex flex-col  items-center gap-6 ">
      <DialogHeader className="w-full">
        <DialogTitle>
          Send <span className="font-semibold">{token}</span> to{" "}
          <span className="font-semibold">
            {address.name
              ? address.name
              : `${address.ss58.slice(0, 4)}
          ...
          ${address.ss58.slice(address.ss58.length - 4, address.ss58.length)}`}
          </span>
        </DialogTitle>
      </DialogHeader>
      <div className="w-full flex flex-col gap-1">
        <span className="text-sm font-regular text-foreground-dimmed">
          Amount
        </span>
        <div className="flex gap-4 items-center">
          <input
            value={20}
            className="w-full border-border-hint rounded-md bg-background-default hover:border-border-dimmed outline-none focus:border-border-contrast border p-2"
          />
          <span className="font-semibold">{token}</span>
        </div>
      </div>
      <Buttons />
    </div>
  );
}

export function SwapDialogContent({ token }: { token?: String }) {
  const swapTo = token === "GLMR" ? 0 : 1;
  return (
    <div className="w-full py-2 lg:py-0 h-full lg:h-fit flex flex-col  items-center gap-6 ">
      <DialogHeader className="w-full">
        <DialogTitle>
          Swap <strong>{token}</strong>
        </DialogTitle>
      </DialogHeader>
      <div className="w-full">
        <div className="flex flex-col gap-0.5 items-center">
          <div className="w-full bg-background-default shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] p-4 rounded-md flex justify-between items-center text-foreground-dimmed ">
            <div className="w-1/3 flex flex-col gap-2">
              <span className="text-sm">You send</span>
              <input
                value={10}
                className="hover:border-border-dimmed outline-none focus:border-border-contrast border text-2xl px-2 py-1 bg-background-dip shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] rounded-md font-medium text-foreground-contrast"
              />
              <span className="text-sm">Balance: 14</span>
            </div>
            <div className="w-full flex flex-col gap-2 items-end justify-between h-full">
              <span className="h-4" />
              <Button variant={"outline"} className="flex gap-1.5 pl-2.5">
                <TokenCircle chain={token} /> {token}
                <ChevronDown stroke="currentColor" className="w-3 h-3" />
              </Button>
              <span className="text-sm">Polkadot</span>
            </div>
          </div>
          <div className="h-1 z-50 flex items-center">
            <div className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] h-12 w-12 bg-background-float rounded-full flex items-center justify-center">
              <ArrowDown
                stroke="var(--colors-foreground-contrast)"
                className="w-6 h-6"
              />
            </div>
          </div>
          <div className="w-full bg-background-default shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] p-4 rounded-md flex justify-between items-center text-foreground-dimmed ">
            <div className="w-1/3 flex flex-col gap-2">
              <span className="text-sm">You receive</span>
              <input
                value={3.1843}
                className="hover:border-border-dimmed outline-none focus:border-border-contrast border text-2xl px-2 py-1 bg-background-dip shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] rounded-md font-medium text-foreground-contrast"
              />
              <span className="text-sm">Balance: 0</span>
            </div>
            <div className="flex flex-col gap-2 items-end justify-between h-full">
              <span className="h-4" />
              <Button variant={"outline"} className="flex gap-1.5 pl-2.5">
                <TokenCircle chain={tokens[swapTo].currency} />{" "}
                {tokens[swapTo].currency}
                <ChevronDown stroke="currentColor" className="w-3 h-3" />
              </Button>
              <span className="text-sm">Polkadot</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-3 px-2 flex items-center justify-between text-foreground-dimmed">
          1 {token} = 14.2357 {tokens[swapTo].currency}
          <ChevronDown
            stroke="var(--colors-foreground-dimmed)"
            className="w-3 h-3"
          />
        </div>
      </div>
      <Buttons />
    </div>
  );
}
