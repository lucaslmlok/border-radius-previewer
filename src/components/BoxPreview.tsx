import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const BoxPreview = () => {
  const borderRadius = useSelector((state: RootState) => state.borderRadius);

  return (
    <div
      className="my-5 aspect-square w-full max-w-[12rem] bg-gradient-to-tr from-cyan-500 to-purple-500"
      style={{
        borderRadius: `${borderRadius.topLeft}% ${borderRadius.topRight}% ${borderRadius.bottomRight}% ${borderRadius.bottomLeft}%`,
      }}
    ></div>
  );
};

export default BoxPreview;
