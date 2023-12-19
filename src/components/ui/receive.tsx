import { tokens } from "@/main";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "./button";
import { TokenIcon } from "./icons";
import { Input } from "./input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default function Receive({
  receive,
  setReceive,
  value,
  onChangeX,
  setRatio,
}: {
  receive: string;
  setReceive: (token: string) => void;
  setRatio: (token: number) => void;
  value: string;
  onChangeX: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="bg-background-float flex w-full justify-between gap-16 rounded-lg p-3">
      <div className="flex flex-col gap-3">
        <span className="fint-inter text-foreground-dimmed text-xs">You receive</span>
        <Input
          placeholder="0"
          value={value}
          onChange={onChangeX}
          className="h-10 w-24 p-1.5 text-2xl"
        />
        <span className="fint-inter text-foreground-dimmed text-xs">0 Balance</span>
      </div>
      <div className="flex flex-col items-end justify-end gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" className="flex items-center gap-2">
              <TokenIcon token={receive} />
              {receive}
              <ChevronDownIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-1">
            {tokens.map((token) => {
              return (
                <DropdownMenuItem
                  className={`${token.currency === receive && "bg-fill-selected"}`}
                  onClick={() => {
                    setReceive(token.currency);
                    setRatio(Number(Math.random().toFixed(2)));
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <TokenIcon token={token.currency} />
                    <span>{token.currency}</span>
                    {token.currency === receive && <CheckIcon size={16} />}
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="fint-inter text-foreground-dimmed text-xs">Moonbeam</span>
      </div>
    </div>
  );
}
