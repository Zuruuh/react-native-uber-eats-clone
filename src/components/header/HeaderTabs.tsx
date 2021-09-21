import React from "react";
import { View } from "react-native";
import HeaderButton from "./HeaderButton";

export default function HeaderTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </View>
  );
}
