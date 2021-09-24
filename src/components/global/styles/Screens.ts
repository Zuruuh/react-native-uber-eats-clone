import { Platform, StatusBar } from "react-native";
import { DynamicStyleSheet, DynamicValue } from "react-native-dynamic";
import palette from "./palette";

export default new DynamicStyleSheet({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    backgroundColor: new DynamicValue(
      palette.lightSecondary,
      palette.darkSecondary
    ),
    height: "100%",
  },
  innerContainer: {
    height: "92%",
  },
});
