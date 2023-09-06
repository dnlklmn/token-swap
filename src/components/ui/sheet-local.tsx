import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ActionRight from "@w3f/polkadot-icons/keyline/ActionRight";
import ActionLeft from "@w3f/polkadot-icons/keyline/ActionLeft";
import { useState } from "react";
import { TokenCircle } from "@/main";
import Identicon from "@polkadot/react-identicon";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { addresses } from "@/main";
import { SendDialogContent, SwapDialogContent } from "./dialog-content";
import { AddIcon } from "./icons";

function MenuItem({
  title,
  withChevron,
  onClick,
  children,
}: {
  title?: string;
  withChevron?: boolean;
  onClick?: () => void;
  children?: JSX.Element | null;
}) {
  return (
    <div
      className="w-full py-3 p-6 flex items-center justify-between"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {children}
        {title}
      </div>
      {withChevron && <ActionRight stroke="currentColor" className="w-5 h-5" />}
    </div>
  );
}

export default function SheetLocal({
  children,
  currency,
}: {
  children?: JSX.Element;
  currency?: string;
}) {
  const [menu, setMenu] = useState("initial");
  const [currentModal, setCurrentModal] = useState("send");

  function Initial() {
    return (
      <Dialog>
        <MenuItem
          title="Teleport to"
          withChevron
          onClick={() => {
            setMenu("teleport");
          }}
        />
        <MenuItem
          title="Send to"
          withChevron
          onClick={() => {
            setMenu("send");
            setCurrentModal("send");
          }}
        />
        <div className="h-[1px] my-2 bg-fill-separator mx-6" />
        <DialogTrigger className="w-full">
          <MenuItem title="Swap" />
        </DialogTrigger>
        <MenuItem title="Stake" />
        <MenuItem title="Delegate" />
        <MenuItem title="Inspect on Explorer" />
        <DialogContent className="gap-3 flex flex-col items-center w-full h-full">
          <SwapDialogContent token={currency} />
        </DialogContent>
      </Dialog>
    );
  }

  function Teleport() {
    return (
      <>
        <MenuItem
          title="Back"
          onClick={() => {
            setMenu("initial");
          }}
        >
          <ActionLeft stroke="currentColor" className="w-6 h-6" />
        </MenuItem>
        <MenuItem title="Assets Hub">
          <TokenCircle chain="DOT" />
        </MenuItem>
        <div className="h-[1px] my-2 bg-fill-separator mx-6" />
        <MenuItem title="Polkadot Relay Chain">
          <TokenCircle chain="DOT" />
        </MenuItem>
        <MenuItem title="Acala">
          <TokenCircle chain="ACA" />
        </MenuItem>
        <MenuItem title="HydraDX">
          <TokenCircle chain="HYD" />
        </MenuItem>
        <div className="h-[1px] my-2 bg-fill-separator mx-6" />
        <MenuItem title="Ethereum (through bridge)">
          <TokenCircle chain="ETH" />
        </MenuItem>
      </>
    );
  }

  function Send() {
    const [currentAddress, setCurrentAddress] = useState(0);
    return (
      <Dialog>
        <MenuItem
          title="Back"
          onClick={() => {
            setMenu("initial");
          }}
        >
          <ActionLeft stroke="currentColor" className="w-6 h-6" />
        </MenuItem>
        {addresses.map((address, index) => (
          <>
            <DialogTrigger
              className="w-full"
              onClick={() => setCurrentAddress(index)}
            >
              <MenuItem
                title={
                  address.name
                    ? address.name
                    : `${address?.ss58.slice(0, 4)}...
                            ${address?.ss58.slice(
                              address.ss58.length - 4,
                              address.ss58.length
                            )}`
                }
              >
                <Identicon value={address.ss58} theme="polkadot" size={24} />
              </MenuItem>
            </DialogTrigger>
            {address.name && (
              <div className="h-[1px] my-2 bg-fill-separator mx-6" />
            )}
          </>
        ))}
        <MenuItem title="Add new">
          <AddIcon />
        </MenuItem>
        <DialogContent className="gap-6">
          {currentModal === "send" ? (
            <SendDialogContent
              address={addresses[currentAddress]}
              token={currency}
            />
          ) : (
            <SwapDialogContent token={currency} />
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet>
      <SheetTrigger onClick={() => setMenu("initial")}>{children}</SheetTrigger>
      <SheetContent
        className="w-full flex flex-col gap-1.5 px-0 py-4 rounded-t-2xl"
        side="bottom"
      >
        {menu === "initial" && <Initial />}
        {menu === "teleport" && <Teleport />}
        {menu === "send" && <Send />}
      </SheetContent>
    </Sheet>
  );
}
