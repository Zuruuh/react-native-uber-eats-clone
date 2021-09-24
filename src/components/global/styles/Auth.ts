import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: 350,
    height: 150,
  },
  titleContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  formContainer: {
    width: "80%",
    alignContent: "center",
  },
  buttonTitle: {
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLink: {
    backgroundColor: "rgba(0,0,0,0)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    alignItems: "center",
    minWidth: "100%",
    borderRadius: 5,
  },
  buttonLinkText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
