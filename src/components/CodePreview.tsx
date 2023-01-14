import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import CopyButton from "./CopyButton";

const CodePreview = () => {
  const borderRadius = useSelector((state: RootState) => state.borderRadius);

  const code = `border-radius: ${borderRadius.topLeft}% ${borderRadius.topRight}% ${borderRadius.bottomRight}% ${borderRadius.bottomLeft}%;`;

  return (
    <div className="relative flex flex-col items-end rounded-lg bg-zinc-700 py-6 px-6 pt-12">
      <CopyButton text={code} />
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

export default CodePreview;
