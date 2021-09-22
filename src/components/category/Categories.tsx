import React from "react";
import { View } from "react-native";
import Category from "./Category";
import SeeAllCategories from "./SeeAllCategories";
import { categories as categoriesData } from "data/categories";
import { Category as CategoriesType } from "types/category";

export default function Categories() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const getCategories = () => {
      setCategories(
        categoriesData.sort((a, b) =>
          a.name.localeCompare(b.name)
        ) as CategoriesType[]
      );
    };
    getCategories();
  }, []);
  const stripCategories = (length) => {
    return categories.slice(0, length);
  };
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      {categories.length > 4 &&
        stripCategories(3).map((category) => (
          <Category
            key={category.id}
            title={category.name}
            image={category.image}
          />
        ))}
      {categories.length > 4 && <SeeAllCategories />}
      {categories.length < 5 &&
        categories.map((category) => (
          <Category
            key={category.id}
            title={category.name}
            image={category.url}
          />
        ))}
    </View>
  );
}
