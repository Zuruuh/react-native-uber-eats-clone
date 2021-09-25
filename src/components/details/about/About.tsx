import React from "react";
import { View, Text, Image } from "react-native";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  route: any;
}

export default function About({ route }: props) {
  const { name, categories, price, image_url, reviewCount, averageRating } =
    route.params.restaurant;

  const formattedCategories: string = categories
    .map((category) => category.title)
    .join(" • ");
  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${averageRating} ⭐ • (${reviewCount})+`; //prettier-ignore
  const styles = useDynamicValue(dynamicStyles);
  return (
    <View>
      {/* Image */}
      <View>
        <Image
          source={{ uri: !image_url ? "https://bit.ly/3hWWiGk" : image_url }}
          style={styles.image}
        />
      </View>
      {/* Title */}
      <Text style={[styles.text, styles.title]}>{name}</Text>
      {/* Description */}
      <Text style={[styles.text, styles.description]}>{description}</Text>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 15.5,
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
});
