import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "components/details/about/About";
import Nav from "components/home/navbar/Nav";

export default function Details() {
  return (
    <>
      <View>
        <About />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
      </View>
    </>
  );
}
