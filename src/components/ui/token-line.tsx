import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Button } from "./button";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { SwapDialogContent } from "./dialog-content";
import { TokenTooltipContent } from "./tooltip-content";
import { TokenCircle } from "@/main";

interface ItemContentProps {
  children?: JSX.Element | null;
  label?: String;
  currency?: String;
  amount?: String;
  withHint?: boolean;
}

export function TokenLine({ children, currency, withHint }: ItemContentProps) {
  return (
    <div className="w-full flex items-center px-2 rounded-md py-1 hover:bg-fill-selected justify-between">
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="w-full">
              <div className="flex items-center gap-2 ">
                <TokenCircle chain={currency} />
                <span>{currency?.toUpperCase()}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-background-float border border-border-hint rounded-lg p-4 shadow-lg">
              <TokenTooltipContent withHint={withHint} currency={currency}>
                <DialogTrigger>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="rounded-full"
                  >
                    Swap
                  </Button>
                </DialogTrigger>
              </TokenTooltipContent>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>
          <SwapDialogContent token={currency} />
        </DialogContent>
      </Dialog>
      {children}
    </div>
  );
}
