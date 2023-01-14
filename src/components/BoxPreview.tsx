import { useBorderRadiusString } from "../utils/hooks";
import Slider from "./Slider";

const BoxPreview = () => {
  const borderRadiusString = useBorderRadiusString();

  return (
    <div className="relative my-5 aspect-square w-full max-w-[16rem] border-2 border-dashed">
      <div
        className="h-full w-full bg-gradient-to-tr from-teal-500 to-purple-500"
        style={{
          borderRadius: borderRadiusString,
        }}
      ></div>

      <Slider direction="top" />
      <Slider direction="bottom" />
      <Slider direction="left" />
      <Slider direction="right" />
    </div>
  );
};

export default BoxPreview;
