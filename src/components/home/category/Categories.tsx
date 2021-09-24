import React from "react";
import { View } from "react-native";
import Category from "./Category";
import { categories as categoriesData } from "data/categories";
import { Category as CategoriesType } from "types/category";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import { ScrollView } from "react-native-gesture-handler";

export default function Categories() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(
      categoriesData.sort((a, b) =>
        a.name.localeCompare(b.name)
      ) as CategoriesType[]
    );
  }, []);

  const styles = useDynamicValue(dynamicStyles);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.innerContainer}
      >
        {categories.map((category) => (
          <View key={category.id} style={styles.item}>
            <Category category={category} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    marginTop: 5,
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkPrimary
    ),
    paddingVertical: 10,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  innerContainer: {
    padding: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  item: {
    marginRight: 15,
  },
});
