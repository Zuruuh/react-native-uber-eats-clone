import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface navbarSlice {
  value: string;
}

const initialState: navbarSlice = {
  value: "home",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setNavbar } = navbarSlice.actions;

export const navbarReducer = navbarSlice.reducer;
