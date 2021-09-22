import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { navData } from "data/nav";
import NavButton from "./NavButton";

export default function Nav() {
  return (
    <>
      <Divider width={1} />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        {navData.map((button) => (
          <NavButton key={button.id} button={button} />
        ))}
      </View>
    </>
  );
}
