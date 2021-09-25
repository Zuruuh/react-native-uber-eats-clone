import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface bottomPopperState {
  value: string;
}

const initialState: bottomPopperState = {
  value: "",
};

export const bottomPopperSlice = createSlice({
  name: "bottomPopper",
  initialState,
  reducers: {
    setbottomPopper: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setbottomPopper } = bottomPopperSlice.actions;

export const bottomPopperReducer = bottomPopperSlice.reducer;
