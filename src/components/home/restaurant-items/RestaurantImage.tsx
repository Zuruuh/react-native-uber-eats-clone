import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, TouchableOpacity, View } from "react-native";

export default function RestaurantImage(props: { image: string }) {
  const image = !props.image ? "https://bit.ly/3hWWiGk" : props.image;
  return (
    <View
      style={{
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 15,
          right: 15,
        }}
      >
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color="#fff"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
}
