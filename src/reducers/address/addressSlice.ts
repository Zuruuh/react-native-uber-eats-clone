import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address } from "types/address";

export interface bottomPopperState {
  value: Address;
}

const initialState: bottomPopperState = {
  value: { name: null, email: null, address: null },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Address>) => {
      // console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export const addressReducer = addressSlice.reducer;
