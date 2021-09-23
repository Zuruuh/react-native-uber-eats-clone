import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import RootNavigation from "./navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);
  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  } else {
    // return (
    //   <Login />
    // )
  }
}
