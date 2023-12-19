import { useState } from "react";
import Send from "../ui/send";
import Receive from "../ui/receive";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "../ui/button";
export default function TokenSwap() {
  const [send, setSend] = useState("DOT");
  const [receive, setReceive] = useState("GLMR");

  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const [ratio, setRatio] = useState(0.5);

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Input One:", inputOne);
    console.log("Input Two:", inputTwo);
    // Here you can add logic to handle the form submission, such as sending data to a server
  };

  // Event handlers for input changes
  const handleInputOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputOne(event.target.value);
    setInputTwo(String(Number(event.target.value) * ratio));
  };

  const handleInputTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTwo(event.target.value);
    setInputOne(String((Number(event.target.value) * 1) / ratio));
  };

  return (
    <div className="text-foreground-contrast flex w-full flex-col-reverse gap-6 px-4 lg:flex-row lg:px-8">
      <div className="bg-background-dip h-[512px] w-full rounded-md lg:w-2/3" />
      <form
        onSubmit={handleSubmit}
        className="bg-background-default flex h-fit w-full flex-col items-center gap-1 overflow-hidden rounded-lg p-4 shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)] lg:w-1/3"
      >
        <span className="mb-4 mt-2 w-full px-2 text-lg font-medium">Token Swapper</span>
        <Send
          send={send}
          setSend={setSend}
          setRatio={setRatio}
          value={inputOne}
          onChangeX={handleInputOneChange}
        />
        <div className="z-50 flex h-0 items-center">
          <div className="bg-background-default border-background-default flex h-10 w-10 items-center justify-center rounded-full border-4">
            <ArrowDownIcon />
          </div>
        </div>
        <Receive
          receive={receive}
          setReceive={setReceive}
          setRatio={setRatio}
          value={inputTwo}
          onChangeX={handleInputTwoChange}
        />
        {send === receive ? (
          <span className="text-foreground-dimmed mt-1.5 w-full items-center py-2 text-xs">
            Pick different tokens to swap
          </span>
        ) : (
          <span className="text-foreground-dimmed mt-1.5 w-full items-center py-2 text-xs">
            1 {send} = {ratio} {receive}
          </span>
        )}
        <Button disabled={send === receive} className=" mt-2 w-full rounded-md">
          Swap
        </Button>
      </form>
    </div>
  );
}
