import { configureStore } from "@reduxjs/toolkit";
import { tabReducer } from "reducers/tabs/tabSlice";
import { categoryReducer } from "reducers/categories/categorySlice";
import { bottomPopperReducer } from "reducers/bottomPopper/bottomPopperSlice";
import { searchBarReducer } from "reducers/searchBar/searchBarSlice";
import { navbarReducer } from "reducers/navbar/navbarSlice";
import { cartReducer } from "reducers/cart/cartSlice";
import { userReducer } from "reducers/user/userSlice";
import { addressReducer } from "reducers/address/addressSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    category: categoryReducer,
    bottomPopper: bottomPopperReducer,
    searchBar: searchBarReducer,
    navbar: navbarReducer,
    cart: cartReducer,
    user: userReducer,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
