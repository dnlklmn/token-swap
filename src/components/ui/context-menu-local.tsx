import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { addresses } from "@/main";
import Identicon from "@polkadot/react-identicon";
import { SendDialogContent, SwapDialogContent } from "./dialog-content";
import {
  PolkadotCircle,
  AcalaCircle,
  HydraCircle,
  EthereumCircle,
  AddIcon,
} from "./icons";

function ItemContent({
  children,
  label,
  disabled,
}: {
  children?: JSX.Element | null;
  label?: String;
  disabled?: boolean;
}) {
  return (
    <ContextMenuItem disabled={disabled}>
      <div className="flex items-center gap-2 pointer-none">
        {children}
        <span>{label}</span>
      </div>
    </ContextMenuItem>
  );
}

export default function ContextMenuLocal({
  children,
  token,
}: {
  children?: JSX.Element;
  token?: string;
}) {
  const [currentAddress, setCurrentAddress] = useState(0);
  const [currentModal, setCurrentModal] = useState("send");
  return (
    <ContextMenu>
      <Dialog>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuSub>
            <ContextMenuSubTrigger>Teleport to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ItemContent label="Assets Hub" disabled>
                <PolkadotCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Polkadot Relay Chain" disabled>
                <PolkadotCircle />
              </ItemContent>
              <ItemContent label="Acala" disabled>
                <AcalaCircle />
              </ItemContent>
              <ItemContent label="HydraDX" disabled>
                <HydraCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Ethereum (through bridge)" disabled>
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
                    onClick={() => {
                      setCurrentAddress(index);
                      setCurrentModal("send");
                    }}
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

              <ItemContent label="New Address">
                <AddIcon />
              </ItemContent>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <DialogTrigger
            className="w-full"
            onClick={() => {
              setCurrentModal("swap");
            }}
          >
            <ContextMenuItem>Swap</ContextMenuItem>
          </DialogTrigger>
          <ContextMenuItem disabled>Stake</ContextMenuItem>
          <ContextMenuItem disabled>Delegate</ContextMenuItem>
          <ContextMenuItem disabled>Inspect on Explorer</ContextMenuItem>
        </ContextMenuContent>
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
    </ContextMenu>
  );
}
