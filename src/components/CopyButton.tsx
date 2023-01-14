import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

let timeoutId = 0;

type Props = {
  text: string;
};

function CopyButton({ text }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsCopied(false), 2000) as any;
  };

  return (
    <button
      className={`absolute top-2 right-2 flex items-center justify-center rounded border-2 border-zinc-500 bg-zinc-600 p-1.5 leading-none shadow transition-all duration-100 hover:border-white hover:bg-zinc-500 ${
        isCopied ? "w-16" : "w-8"
      }`}
      title="Copy"
      onClick={copyText}
    >
      {isCopied ? "Copied!" : <FaRegCopy />}
    </button>
  );
}

export default CopyButton;
