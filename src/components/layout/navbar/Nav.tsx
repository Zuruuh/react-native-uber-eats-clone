import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { navData } from "data/nav";
import NavButton from "./NavButton";
import {
  DynamicStyleSheet,
  useDynamicValue,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  nav: any;
}

export default function Nav({ nav }: props) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <>
      <Divider width={1} />
      <View style={styles.container}>
        {navData.map((button) => (
          <NavButton nav={nav} key={button.id} button={button} />
        ))}
      </View>
    </>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: new DynamicValue(
      palette.lightSecondary,
      palette.darkSecondary
    ),
  },
});
