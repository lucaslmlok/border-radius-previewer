import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BorderRadiusState {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

const initialState: BorderRadiusState = {
  topLeft: 0,
  topRight: 0,
  bottomLeft: 0,
  bottomRight: 0,
};

export const borderRadiusSlice = createSlice({
  name: "borderRadius",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<BorderRadiusState>) => {
      state.topLeft = action.payload.topLeft;
      state.topRight = action.payload.topRight;
      state.bottomLeft = action.payload.bottomLeft;
      state.bottomRight = action.payload.bottomRight;
    },
  },
});

export const { set } = borderRadiusSlice.actions;

export default borderRadiusSlice.reducer;
