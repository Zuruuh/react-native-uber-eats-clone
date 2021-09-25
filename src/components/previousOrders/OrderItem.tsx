import React from "react";
import { View, Text } from "react-native";
import { menu } from "data/menu";
import { CartItem } from "types/cart";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  order: any;
}

export default function OrderItem({ order }: props) {
  const styles = useDynamicValue(dynamicStyles);
  let total = 0;
  order.products.forEach((product) => {
    total += product.price * product.quantity;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{order.restaurant}</Text>
      {order.products.map((product: CartItem, index) => {
        const menuItem = menu.find(
          (item: any) => item.id === product.productId
        );
        return (
          <View
            key={`order-${index}-item-${product.productId}`}
            style={{ paddingHorizontal: 20 }}
          >
            <View>
              <Text style={styles.text}>
                {menuItem.title} x {product.quantity}
              </Text>
              <Text style={styles.text}>
                {Math.round(menuItem.price * 100) / 100}€/u
              </Text>
            </View>
          </View>
        );
      })}
      <Text style={styles.text}>Total: {Math.round(total * 100) / 100}€</Text>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: new DynamicValue(
      palette.lightTertiary,
      palette.darkTertiary
    ),
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
});
