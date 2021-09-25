import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/user";

export interface userState {
  value: User | null;
}

const initialState: userState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
