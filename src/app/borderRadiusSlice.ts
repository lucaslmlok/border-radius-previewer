import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BorderRadiusState {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

const initialState: BorderRadiusState = {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50,
};

export const borderRadiusSlice = createSlice({
  name: "borderRadius",
  initialState,
  reducers: {
    setBorderRadius: (state, action: PayloadAction<BorderRadiusState>) => {
      state.top = action.payload.top;
      state.bottom = action.payload.bottom;
      state.left = action.payload.left;
      state.right = action.payload.right;
    },
  },
});

export const { setBorderRadius } = borderRadiusSlice.actions;

export default borderRadiusSlice.reducer;
