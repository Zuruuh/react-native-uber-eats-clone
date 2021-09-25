import React from "react";
import { View, Text } from "react-native";
import { menu } from "data/menu";
import CartItem from "./CartItem";

interface props {
  items: {
    productId: string;
    price: number;
    quantity: number;
  }[];
}

export default function CartItems({ items }: props) {
  return (
    <View>
      {items.map((item) => {
        const MenuItem = menu.find((m) => m.id === item.productId);
        return (
          <View key={item.productId}>
            <CartItem
              product={MenuItem}
              infos={{ price: item.price, quantity: item.quantity }}
            />
          </View>
        );
      })}
    </View>
  );
}
