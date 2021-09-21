import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native";
import { store } from "./src/app/store";
import Home from "./src/screens/Home";
import SafeViewAndroid from "./src/components/views/SafeViewAndroid";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
