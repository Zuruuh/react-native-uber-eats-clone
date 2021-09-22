import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Restaurant } from "types/restaurant";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";

export default function RestaurantItem(props: {
  restaurant: Restaurant;
  nav: any;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginBottom: 10,
        backgroundColor: "#fff",
        paddingBottom: 10,
        borderRadius: 5,
      }}
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
