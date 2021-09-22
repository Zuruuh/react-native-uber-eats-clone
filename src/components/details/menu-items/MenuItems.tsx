import React from "react";
import { ScrollView, Text, View } from "react-native";
import { menu } from "data/menu";
import MenuItem from "./MenuItem";
import { Divider } from "react-native-elements";

export default function MenuItems() {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Menu</Text>
      <ScrollView>
        {menu.map((item, index) => (
          <View key={`${index}-${item.title}`}>
            <MenuItem item={item} />
            <Divider width={0.5} style={{ marginBottom: 10 }} />
          </View>
        ))}
        <View
          style={{
            height: 30,
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
