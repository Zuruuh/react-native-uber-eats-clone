import React from "react";
import { View, Text, Image, ImageStyle } from "react-native";
import { Menu } from "types/menu";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  product: Menu;
  infos: {
    price: number;
    quantity: number;
  };
}

export default function CartItem({ product, infos }: props) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: product.image }}
          style={styles.image as ImageStyle}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.title]}>{product.title}</Text>
          <Text style={[styles.text]}>Qty: {infos.quantity}</Text>
        </View>
        <Text style={[styles.text]}>
          Total: {Math.round(infos.price * infos.quantity * 100) / 100}€
        </Text>
      </View>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    backgroundColor: new DynamicValue(
      palette.lightTertiary,
      palette.darkTertiary
    ),
    flexDirection: "row",
    minHeight: 100,
    margin: 10,
    borderRadius: 10,
  },
  imageWrapper: {
    height: 150,
    width: "33%",
    alignSelf: "flex-start",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: 150,
    width: "100%",
  },
  content: {
    padding: 10,
    width: "66%",
    justifyContent: "space-between",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  title: {
    maxWidth: "80%",
    fontSize: 20,
  },
});
