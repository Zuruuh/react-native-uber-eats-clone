import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Restaurant } from "types/restaurant";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import {
  DynamicStyleSheet,
  useDynamicValue,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

export default function RestaurantItem(props: {
  restaurant: Restaurant;
  nav: any;
}) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {
        props.nav.navigate("details", { restaurant: { ...props.restaurant } });
      }}
    >
      <View>
        <RestaurantImage image={props.restaurant.image_url} />
        <RestaurantInfo restaurant={props.restaurant} />
      </View>
    </TouchableOpacity>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    marginBottom: 10,
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkPrimary
    ),
    paddingBottom: 10,
    borderRadius: 5,
  },
});
