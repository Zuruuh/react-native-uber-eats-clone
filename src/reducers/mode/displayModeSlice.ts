import { createSlice } from "@reduxjs/toolkit";

export interface modeSlice {
  value: boolean;
}

const initialState: modeSlice = {
  value: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = modeSlice.actions;

export const modeReducer = modeSlice.reducer;
