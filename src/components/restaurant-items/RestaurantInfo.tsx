import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Restaurant } from "types/restaurant";

export default function RestaurantInfo(props: { restaurant: Restaurant }) {
  const { restaurant } = props;
  const calculateAvg = (time: number): string => {
    for (var i = 0; i < time; i += 15) {}
    return `${i - 15}-${i}`;
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {restaurant.name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>
          {calculateAvg(restaurant.deliveryTime)} • mins
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#eee",
          height: 40,
          width: 40,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*Implement rating popover */}
        <View
          style={{
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Text>{Math.round(restaurant.averageRating * 10) / 10}</Text>
        </View>
        <FontAwesomeIcon icon={faStar} color="#06C167" size={32} />
      </TouchableOpacity>
    </View>
  );
}
