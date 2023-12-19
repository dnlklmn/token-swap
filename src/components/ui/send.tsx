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

export default function Send({
  send,
  setSend,
  value,
  onChangeX,
  setRatio,
}: {
  send: string;
  setSend: (token: string) => void;
  setRatio: (token: number) => void;
  value: string;
  onChangeX: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="bg-background-float flex w-full justify-between gap-16 rounded-lg p-3">
      <div className="flex flex-col gap-3">
        <span className="fint-inter text-foreground-dimmed text-xs">You send</span>
        <Input
          placeholder="10"
          value={value}
          onChange={onChangeX}
          className="h-10 w-24 p-1.5 text-2xl"
        />
        <span className="fint-inter text-foreground-dimmed text-xs">14 Balance</span>
      </div>
      <div className="flex flex-col items-end justify-end gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" className="flex items-center gap-2">
              <TokenIcon token={send} />
              {send}
              <ChevronDownIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-1">
            {tokens.map((token) => {
              return (
                <DropdownMenuItem
                  className={`${token.currency === send && "bg-fill-selected"}`}
                  onClick={() => {
                    setSend(token.currency);
                    setRatio(Number(Math.random().toFixed(2)));
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <TokenIcon token={token.currency} />
                    <span>{token.currency}</span>
                    {token.currency === send && <CheckIcon size={16} />}
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="fint-inter text-foreground-dimmed text-xs">Polkadot</span>
      </div>
    </div>
  );
}
