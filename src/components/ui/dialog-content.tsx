import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./button";
import { DialogHeader } from "./dialog";

interface SendDialogContentProps {
  address?: any;
}

export default function SendDialogContent({ address }: SendDialogContentProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          Send DOT to{" "}
          {address.name
            ? address.name
            : `${address.ss58.slice(0, 4)}
          ...
          ${address.ss58.slice(address.ss58.length - 4, address.ss58.length)}`}
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-regular text-foreground-dimmed">
          Amount
        </span>
        <div className="flex gap-4 items-center">
          <input
            value={20}
            className="w-full border-border-hint rounded-md bg-background-default hover:border-border-dimmed outline-none focus:border-border-contrast border p-2"
          />
          <span className="font-medium">DOT</span>
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <Button variant="outline" className="w-full rounded-full">
          Cancel
        </Button>
        <Button className="w-full bg-fill-primary hover:bg-fill-primary-hover rounded-full">
          Send
        </Button>
      </div>
    </>
  );
}
