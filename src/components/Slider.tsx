import ReactSlider from "react-slider";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setBorderRadius } from "../app/borderRadiusSlice";
import { useRef } from "react";

type SliderProps = {
  direction: "top" | "right" | "bottom" | "left";
};

const Slider = ({ direction }: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orientation =
    direction === "top" || direction === "bottom" ? "horizontal" : "vertical";

  const borderRadius = useSelector((state: RootState) => state.borderRadius);
  const dispatch = useDispatch();

  const handleChange = (e: MouseEvent | TouchEvent) => {
    if (containerRef.current && e.target instanceof HTMLElement) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const newValue =
        (Math.min(Math.max(0, x - rect.x), rect.width) / rect.width) * 100;
      dispatch(setBorderRadius({ ...borderRadius, [direction]: newValue }));
    }
  };

  const handleDown = () => {
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("touchmove", handleChange);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
  };

  const handleUp = () => {
    window.removeEventListener("mousemove", handleChange);
    window.removeEventListener("touchmove", handleChange);
    window.removeEventListener("mouseup", handleUp);
    window.removeEventListener("touchend", handleUp);
  };

  const thumbStyle = {
    top: `${orientation === "vertical" ? borderRadius[direction] : 0}%`,
    left: `${orientation === "vertical" ? 0 : borderRadius[direction]}%`,
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "absolute",
        orientation === "vertical"
          ? "h-full w-4 -translate-x-2/3"
          : "h-4 w-full -translate-y-2/3",
        direction === "bottom" ? "bottom-0" : "top-0",
        direction === "right" ? "right-0" : "left-0"
      )}
      onMouseDown={handleDown}
      onTouchStart={handleDown}
    >
      <button
        className={clsx(
          "absolute aspect-square w-4 cursor-move border-2 border-black bg-white opacity-90 hover:opacity-100",
          orientation === "vertical" ? "-translate-y-1/2" : "-translate-x-1/2"
        )}
        style={thumbStyle}
      ></button>

      {/* <ReactSlider
        orientation={orientation}
        className={clsx(orientation === "vertical" ? "h-full" : "w-full")}
        thumbClassName="cursor-move border-2 border-black bg-white aspect-square opacity-80 w-4 hover:opacity-100"
        renderThumb={(props, state) => <div {...props}></div>}
        value={borderRadius[direction]}
        onChange={(value) =>
          dispatch(setBorderRadius({ ...borderRadius, [direction]: value }))
        }
      /> */}
    </div>
  );
};

export default Slider;
