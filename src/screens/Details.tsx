import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "components/details/about/About";
import MenuItems from "components/details/menu-items/MenuItems";

export default function Details() {
  return (
    <>
      <View style={{ height: "100%" }}>
        <About />
        <Divider width={1.8} style={{ marginTop: 20, marginBottom: 10 }} />
        <View style={{ flex: 1 }}>
          <MenuItems />
        </View>
      </View>
    </>
  );
}
