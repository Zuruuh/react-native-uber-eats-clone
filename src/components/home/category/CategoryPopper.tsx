import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { categories as categoriesData } from "data/categories";
import Category from "./Category";

export default function CategoryPopper() {
  const activeBottomPopper = useSelector(
    (state: RootState) => state.bottomPopper.value
  );

  return (
    <View
      style={{
        display: activeBottomPopper === "CategoryPopper" ? "flex" : "none",
        opacity: activeBottomPopper === "CategoryPopper" ? 1 : 0,
        position: "absolute",
        flex: 1,
        bottom: 0,
        backgroundColor: "#fff",
        width: "100%",
        height: "40%",
        paddingHorizontal: 15,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "900",
        }}
      >
        All Categories
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
        {categoriesData.map((category) => (
          <View
            key={"popper-" + category.id}
            style={{
              marginBottom: 10,
              marginRight: 10,
            }}
          >
            <Category title={category.name} image={category.image} />
          </View>
        ))}
      </View>
    </View>
  );
}
