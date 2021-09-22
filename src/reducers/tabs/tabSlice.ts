import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface tabState {
  value: string;
}

const initialState: tabState = {
  value: "Delivery",
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;

export const tabReducer = tabSlice.reducer;
