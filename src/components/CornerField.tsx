import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { set } from "../app/borderRadiusSlice";
import { kebabToCamel } from "../utils/helpers";
import type { Corner, CornerVar } from "../utils/types";

type Props = {
  corner: Corner;
};

const CornerField = ({ corner }: Props) => {
  const cornerTitle = corner.replace("-", " ");
  const cornerVar = kebabToCamel(corner) as CornerVar;
  const borderRadius = useSelector((state: RootState) => state.borderRadius);
  const dispatch = useDispatch();

  return (
    <div className="rounded bg-zinc-100 py-2.5 px-3 font-bold tracking-tight text-black shadow">
      <div className="flex-1 whitespace-nowrap capitalize">{cornerTitle}:</div>
      <div className="flex items-center gap-1">
        <input
          type="number"
          className="flex-1 rounded border-2 border-zinc-600 px-2"
          min={0}
          max={100}
          value={borderRadius[cornerVar]}
          onChange={(e) =>
            dispatch(set({ ...borderRadius, [cornerVar]: e.target.value }))
          }
        />
        <span>%</span>
      </div>
    </div>
  );
};

export default CornerField;
