import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export const useBorderRadiusString = () => {
  const borderRadius = useSelector((state: RootState) => state.borderRadius);

  const topLeft = borderRadius.top;
  const topRight = 100 - topLeft;
  const bottomLeft = borderRadius.bottom;
  const bottomRight = 100 - bottomLeft;
  const leftTop = borderRadius.left;
  const leftBottom = 100 - leftTop;
  const rightTop = borderRadius.right;
  const rightBottom = 100 - rightTop;

  return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${leftTop}% ${rightTop}% ${rightBottom}% ${leftBottom}%`;
};
