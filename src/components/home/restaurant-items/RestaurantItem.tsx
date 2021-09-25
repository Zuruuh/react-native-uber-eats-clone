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

interface props {
  restaurant: Restaurant;
  nav: any;
}

export default function RestaurantItem({ restaurant, nav }: props) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {
        nav.navigate("details", { restaurant: { ...restaurant } });
      }}
    >
      <View>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo restaurant={restaurant} />
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
