import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { menu } from "data/menu";
import MenuItem from "./MenuItem";
import { Divider } from "react-native-elements";
import ViewCart from "components/details/cart/ViewCart";

export default function MenuItems(props: { nav: any; route: any }) {
  const [scrolled, setScrolled] = React.useState(true);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const e = event.nativeEvent;
    let max = e.layoutMeasurement.height / 6;
    // setScrolled(e.contentOffset.y > (max / 100) * 5);
    // TODO Add bounce/spring animation when button is visible
  };

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
    },
    divider: {
      marginBottom: 10,
    },
    blank: {
      height: 30,
    },
    buttonContainer: {
      position: "absolute",
      bottom: scrolled ? 150 : 0,
      left: 0,
      width: "100%",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <ScrollView onScroll={(event) => handleScroll(event)}>
        {menu.map((item, index) => (
          <View key={`${index}-${item.title}`}>
            <MenuItem item={item} />
            <Divider width={0.5} style={styles.divider} />
          </View>
        ))}
        <View style={styles.blank}></View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ViewCart nav={props.nav} route={props.route} />
      </View>
    </View>
  );
}
