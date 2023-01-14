import ReactSlider from "react-slider";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setBorderRadius } from "../app/borderRadiusSlice";
import type { RootState } from "../app/store";

type SliderProps = {
  direction: "top" | "right" | "bottom" | "left";
};

const Slider = ({ direction }: SliderProps) => {
  const orientation =
    direction === "top" || direction === "bottom" ? "horizontal" : "vertical";

  const borderRadius = useSelector((state: RootState) => state.borderRadius);
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        "absolute",
        orientation === "vertical"
          ? "h-full -translate-x-2"
          : "w-full -translate-y-2",
        direction === "bottom" ? "bottom-0" : "top-0",
        direction === "right" ? "right-0" : "left-0"
      )}
    >
      <ReactSlider
        orientation={orientation}
        className={clsx(orientation === "vertical" ? "h-full" : "w-full")}
        thumbClassName="cursor-move border-2 border-black bg-white aspect-square opacity-80 w-4 hover:opacity-100"
        renderThumb={(props, state) => <div {...props}></div>}
        value={borderRadius[direction]}
        onChange={(value) =>
          dispatch(setBorderRadius({ ...borderRadius, [direction]: value }))
        }
      />
    </div>
  );
};

export default Slider;
