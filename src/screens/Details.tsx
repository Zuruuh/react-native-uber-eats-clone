import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "components/details/about/About";
import MenuItems from "components/details/menu-items/MenuItems";

export default function Details(props: { route: any; nav: any }) {
  return (
    <>
      <View style={{ height: "100%" }}>
        <About route={props.route} />
        <Divider width={1.8} style={{ marginTop: 20, marginBottom: 10 }} />
        <View style={{ flex: 1 }}>
          <MenuItems nav={props.nav} route={props.route} />
        </View>
      </View>
    </>
  );
}
