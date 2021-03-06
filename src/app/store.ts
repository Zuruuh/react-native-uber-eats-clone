import { configureStore } from "@reduxjs/toolkit";
import { tabReducer } from "reducers/tabs/tabSlice";
import { navbarReducer } from "reducers/navbar/navbarSlice";
import { cartReducer } from "reducers/cart/cartSlice";
import { userReducer } from "reducers/user/userSlice";
import { addressReducer } from "reducers/address/addressSlice";
import { modeReducer } from "reducers/mode/displayModeSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    navbar: navbarReducer,
    cart: cartReducer,
    user: userReducer,
    address: addressReducer,
    mode: modeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
