import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  PolkadotCircle,
  AcalaCircle,
  HydraCircle,
  AddIcon,
  MoreIcon,
  EthereumCircle,
} from "@/components/ui/icons";

import Identicon from "@polkadot/react-identicon";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  SendDialogContent,
  SwapDialogContent,
} from "./components/ui/dialog-content";
import { addresses, tokens } from "./main";
import { useState } from "react";

import { TokenLine } from "./components/ui/token-line";

function ItemContent({
  children,
  label,
}: {
  children?: JSX.Element;
  label?: String;
}) {
  return (
    <DropdownMenuItem>
      <div className="flex items-center gap-2 pointer-none">
        {children}
        <span>{label}</span>
      </div>
    </DropdownMenuItem>
  );
}

function DropdownMenuLocal({
  children,
  token,
}: {
  children?: JSX.Element;
  token?: String;
}) {
  const [currentAddress, setCurrentAddress] = useState(0);
  const [currentModal, setCurrentModal] = useState("send");

  return (
    <DropdownMenu>
      <Dialog>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Teleport to</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <ItemContent label="Assets Hub">
                <PolkadotCircle />
              </ItemContent>
              <DropdownMenuSeparator />
              <ItemContent label="Polkadot Relay Chain">
                <PolkadotCircle />
              </ItemContent>
              <ItemContent label="Acala">
                <AcalaCircle />
              </ItemContent>
              <ItemContent label="HydraDX">
                <HydraCircle />
              </ItemContent>
              <DropdownMenuSeparator />
              <ItemContent label="Ethereum (through bridge)">
                <EthereumCircle />
              </ItemContent>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Send to Address</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              {addresses.map((address, index) => (
                <>
                  <DialogTrigger
                    className="w-full"
                    onClick={() => setCurrentAddress(index)}
                  >
                    <ItemContent
                      label={
                        address.name
                          ? address.name
                          : `${address?.ss58.slice(0, 4)}...
                          ${address?.ss58.slice(
                            address.ss58.length - 4,
                            address.ss58.length
                          )}`
                      }
                    >
                      <Identicon
                        value={address.ss58}
                        theme="polkadot"
                        size={24}
                      />
                    </ItemContent>
                  </DialogTrigger>
                  {address.name && <DropdownMenuSeparator />}
                </>
              ))}
              <DialogTrigger className="w-full">
                <ItemContent label="New Address">
                  <AddIcon />
                </ItemContent>
              </DialogTrigger>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DialogTrigger
            className="w-full"
            onClick={() => {
              setCurrentModal("swap");
            }}
          >
            <DropdownMenuItem>Swap</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem>Stake</DropdownMenuItem>
          <DropdownMenuItem>Delegate</DropdownMenuItem>
          <DropdownMenuItem>Inspect on Explorer</DropdownMenuItem>
        </DropdownMenuContent>
        <DialogContent className="gap-6">
          {currentModal === "send" ? (
            <SendDialogContent
              address={addresses[currentAddress]}
              token={token}
            />
          ) : (
            <SwapDialogContent token={token} />
          )}
        </DialogContent>
      </Dialog>
    </DropdownMenu>
  );
}

export default function WithButton() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-6 px-8 text-foreground-contrast">
      <div className="w-full lg:w-2/3 h-[512px] bg-background-dip rounded-md" />
      <div className="flex w-full lg:w-1/3 flex-col gap-6">
        <div className="flex flex-col p-4 gap-2 h-fit rounded-lg text-lg font-medium overflow-hidden bg-background-float shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="text-lg px-2 font-medium my-4">
            Polkadot Assets Hub
          </span>
          {tokens.map((token) => (
            <TokenLine currency={token.currency} amount={token.amount}>
              <DropdownMenuLocal token={token.currency}>
                <div className="flex flex-none gap-1.5">
                  <span>{token.amount}</span>
                  <MoreIcon size="12" />
                </div>
              </DropdownMenuLocal>
            </TokenLine>
          ))}
        </div>
      </div>
    </div>
  );
}
