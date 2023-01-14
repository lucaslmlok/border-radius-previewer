import { useBorderRadiusString } from "../utils/hooks";
import CopyButton from "./CopyButton";

const CodePreview = () => {
  const borderRadiusString = useBorderRadiusString();

  const code = `border-radius: ${borderRadiusString};`;

  return (
    <div className="relative my-4 flex flex-col items-end rounded-xl bg-zinc-700 py-12 px-4 shadow-xl">
      <CopyButton text={code} />
      <pre className="whitespace-normal">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

export default CodePreview;
