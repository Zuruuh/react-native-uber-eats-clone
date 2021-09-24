import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { windowHeight } from "utils/Dimensions";

export default function FormButton(props: {
  title: string;
  customProps: Object;
}) {
  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: "100%",
      height: windowHeight / 15,
      backgroundColor: "#2E64E5",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  return (
    <TouchableOpacity {...props.customProps} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
