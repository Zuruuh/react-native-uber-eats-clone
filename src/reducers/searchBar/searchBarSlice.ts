import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface searchBarState {
  value: string;
}

const initialState: searchBarState = {
  value: "",
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSearchBar: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchBar } = searchBarSlice.actions;

export const searchBarReducer = searchBarSlice.reducer;
