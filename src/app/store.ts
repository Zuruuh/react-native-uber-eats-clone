import { configureStore } from "@reduxjs/toolkit";
import { tabReducer } from "features/tabs/tabSlice";
import { categoryReducer } from "features/categories/categorySlice";
import { bottomPopperReducer } from "features/bottomPopper/bottomPopperSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    category: categoryReducer,
    bottomPopper: bottomPopperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
