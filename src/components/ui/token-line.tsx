import { TokenCircle } from "@/main";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { TokenTooltipContent } from "./tooltip-content";

interface ItemContentProps {
  children?: JSX.Element | null;
  currency?: String;
  amount?: String;
}

export default function TokenLine({ children, currency }: ItemContentProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="w-full flex items-center px-2 rounded-md py-1 hover:bg-fill-selected justify-between">
          <TooltipTrigger className="w-full">
            <div className="flex items-center gap-2 ">
              <TokenCircle chain={currency} />
              <span>{currency?.toUpperCase()}</span>
            </div>
          </TooltipTrigger>
          {children}
        </div>
        <TooltipContent>
          <TokenTooltipContent currency={currency}>
            {children}
          </TokenTooltipContent>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
