import { configureStore } from "@reduxjs/toolkit";
import { tabReducer } from "reducers/tabs/tabSlice";
import { categoryReducer } from "reducers/categories/categorySlice";
import { bottomPopperReducer } from "reducers/bottomPopper/bottomPopperSlice";
import { searchBarReducer } from "reducers/searchBar/searchBarSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    category: categoryReducer,
    bottomPopper: bottomPopperReducer,
    searchBar: searchBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
