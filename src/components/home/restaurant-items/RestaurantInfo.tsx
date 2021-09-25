import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Restaurant } from "types/restaurant";
import {
  DynamicStyleSheet,
  useDynamicValue,
  DynamicValue,
  useDarkMode,
} from "react-native-dynamic";
import palette from "styles/palette";

export default function RestaurantInfo(props: { restaurant: Restaurant }) {
  const { restaurant } = props;
  const darkMode = useDarkMode();
  const calculateAvg = (time: number): string => {
    for (var i = 0; i < time; i += 15) {}
    return `${i - 15}-${i}`;
  };
  const styles = useDynamicValue(dynamicStyles);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{restaurant.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>
          {calculateAvg(restaurant.deliveryTime)} • mins
        </Text>
      </View>
      <TouchableOpacity style={styles.ratingContainer}>
        {/*Implement rating popover */}
        <View style={styles.rating}>
          <Text style={styles.ratingText}>
            {Math.round(restaurant.averageRating * 10) / 10}
          </Text>
        </View>
        <FontAwesomeIcon
          icon={faStar}
          color={darkMode ? palette.tertiary : palette.secondary}
          size={32}
        />
      </TouchableOpacity>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  ratingContainer: {
    backgroundColor: new DynamicValue(
      palette.lightTertiary,
      palette.darkTertiary
    ),
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    position: "absolute",
    zIndex: 2,
  },
  ratingText: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
});
