import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  value: string;
}

const initialState: categoryState = {
  value: "Pick-up",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
