import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useBorderRadiusString } from "../utils/hooks";
import CopyButton from "./CopyButton";

const CodePreview = () => {
  const borderRadiusString = useBorderRadiusString();

  const code = `border-radius: ${borderRadiusString};`;

  return (
    <div className="relative my-4 flex flex-col items-end rounded-xl bg-zinc-700 py-12 px-4 shadow-xl">
      <CopyButton text={code} />
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

export default CodePreview;
