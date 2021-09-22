import React from "react";
import { View, Text, Image } from "react-native";

export default function About() {
  const image = "https://bit.ly/3hWWiGk";

  return (
    <View>
      {/* Image */}
      <View>
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 180,
          }}
        />
      </View>
      {/* Title */}
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        Farmhouse Kitchen thai Cuisine
      </Text>
      {/* Description */}
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontSize: 15.5,
        }}
      >
        Description
      </Text>
    </View>
  );
}
