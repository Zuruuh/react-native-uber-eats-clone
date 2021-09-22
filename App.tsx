import React from "react";
import { Provider } from "react-redux";
import Details from "./src/screens/Details";
import { store } from "./src/app/store";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
