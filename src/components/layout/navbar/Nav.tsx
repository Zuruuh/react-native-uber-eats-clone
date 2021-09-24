import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { navData } from "data/nav";
import NavButton from "./NavButton";

interface props {
  nav: any;
}

export default function Nav({ nav }: props) {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
    position: "relative",
  },
});
