import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props: { route: any }) {
  const { name, categories, price, image_url, reviewCount, averageRating } =
    props.route.params.restaurant;

  const formattedCategories: string = categories
    .map((category) => category.title)
    .join(" • ");
  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${averageRating} ⭐ • (${reviewCount})+`; //prettier-ignore
  return (
    <View>
      {/* Image */}
      <View>
        <Image
          source={{ uri: !image_url ? "https://bit.ly/3hWWiGk" : image_url }}
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
        {name}
      </Text>
      {/* Description */}
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
}
