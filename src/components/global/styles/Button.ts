import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    minWidth: "100%",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    position: "relative",
    minHeight: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    // textAlign: "center",
  },
  iconWrapper: {
    width: 48,
    minHeight: "190%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
