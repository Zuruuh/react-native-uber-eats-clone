import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import { Category as CategoryType } from "types/category";

interface props {
  category: CategoryType;
}

export default function Category({ category }: props) {
  const dispatch = useDispatch();
  const styles = useDynamicValue(dynamicStyles);
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.innerContainer}>
        <View style={styles.item}>
          <Image
            resizeMode="contain"
            source={{ uri: category.image }}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    marginRight: 15,
  },
  innerContainer: {
    alignItems: "center",
  },
  item: {
    backgroundColor: new DynamicValue(
      palette.lightTertiary,
      palette.darkTertiary
    ),
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    width: 65,
    height: 55,
  },
  title: {
    fontSize: 13,
    fontWeight: "900",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
});
