import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { menu } from "data/menu";
import MenuItem from "./MenuItem";
import { Divider } from "react-native-elements";
import ViewCart from "components/details/cart/ViewCart";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  route: any;
  nav: any;
}

export default function MenuItems({ nav, route }: props) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <ScrollView>
        {menu.map((item, index) => (
          <View key={`${index}-${item.title}`}>
            <MenuItem item={item} />
            <Divider width={0.5} style={styles.divider} />
          </View>
        ))}
        <View style={styles.blank}></View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ViewCart nav={nav} route={route} />
      </View>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    marginHorizontal: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  divider: {
    marginBottom: 10,
  },
  blank: {
    height: 60,
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    bottom: 130,
    width: "100%",
  },
});
