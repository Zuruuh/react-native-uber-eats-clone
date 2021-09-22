import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Menu } from "types/menu";

export default function MenuItem(props: { item: Menu }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          marginBottom: 10,
          borderRadius: 8,
          justifyContent: "space-between",
          maxHeight: 150,
        }}
      >
        <View
          style={{
            padding: 5,
            width: 240,
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "600",
            }}
          >
            {props.item.title}
          </Text>
          <Text>{props.item.description}</Text>
          <Text>{props.item.price}€</Text>
        </View>
        <View>
          <Image
            source={{ uri: props.item.image }}
            style={{
              width: 100,
              height: 150,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
}
