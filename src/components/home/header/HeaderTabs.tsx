import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs() {
  return (
    <View style={styles.container}>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
