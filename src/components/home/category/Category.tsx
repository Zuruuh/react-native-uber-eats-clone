import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageURISource,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setCategory } from "reducers/categories/categorySlice";
import { setbottomPopper } from "reducers/bottomPopper/bottomPopperSlice";

export default function Category(props: { title: string; image: string }) {
  const activeCategory = useSelector(
    (state: RootState) => state.category.value
  );
  activeCategory;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setbottomPopper(""));
        dispatch(setCategory(props.title));
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={props.image as ImageURISource}
            style={{
              width: 65,
              height: 55,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "900",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
