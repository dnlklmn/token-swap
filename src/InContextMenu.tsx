import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  PolkadotCircle,
  AcalaCircle,
  HydraCircle,
  AddIcon,
  EthereumCircle,
} from "@/components/ui/icons";

import Identicon from "@polkadot/react-identicon";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { SendDialogContent } from "./components/ui/dialog-content";

import { useState } from "react";
import { addresses, tokens } from "./main";
import { TokenLine } from "./components/ui/token-line";

interface ItemContentProps {
  children?: JSX.Element | null;
  label?: String;
  currency?: String;
  amount?: String;
}

function ItemContent({ children, label }: ItemContentProps) {
  return (
    <ContextMenuItem>
      <div className="flex items-center gap-2 pointer-none">
        {children}
        <span>{label}</span>
      </div>
    </ContextMenuItem>
  );
}

function ContextMenuLocal({
  children,
  token,
}: {
  children?: JSX.Element;
  token?: string;
}) {
  const [currentAddress, setCurrentAddress] = useState(0);
  return (
    <ContextMenu>
      <Dialog>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuSub>
            <ContextMenuSubTrigger>Teleport to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ItemContent label="Assets Hub">
                <PolkadotCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Polkadot Relay Chain">
                <PolkadotCircle />
              </ItemContent>
              <ItemContent label="Acala">
                <AcalaCircle />
              </ItemContent>
              <ItemContent label="HydraDX">
                <HydraCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Ethereum (through bridge)">
                <EthereumCircle />
              </ItemContent>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Send to Address</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
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
                  {address.name && <ContextMenuSeparator />}
                </>
              ))}
              <DialogTrigger className="w-full">
                <ItemContent label="New Address">
                  <AddIcon />
                </ItemContent>
              </DialogTrigger>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Stake</ContextMenuItem>
          <ContextMenuItem>Delegate</ContextMenuItem>
          <ContextMenuItem>Inspect on Explorer</ContextMenuItem>
        </ContextMenuContent>
        <DialogContent className="gap-6">
          <SendDialogContent
            address={addresses[currentAddress]}
            token={token}
          />
        </DialogContent>
      </Dialog>
    </ContextMenu>
  );
}

export default function InContextMenu() {
  return (
    <div className="w-full flex gap-6 px-8 h-full text-foreground-contrast">
      <div className="w-2/3 h-[512px] bg-background-dip rounded-md h-128" />
      <div className="flex w-1/3 flex-col gap-6">
        <div className="flex flex-col h-fit p-4 gap-2 rounded-lg text-lg font-medium overflow-hidden bg-background-float shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="text-lg px-2 font-medium my-4">
            Polkadot Assets Hub
          </span>
          {tokens.map((token) => (
            <ContextMenuLocal token={token.currency}>
              <TokenLine
                withHint
                currency={token.currency}
                amount={token.amount}
              >
                <span>{token.amount}</span>
              </TokenLine>
            </ContextMenuLocal>
          ))}
        </div>
      </div>
    </div>
  );
}
