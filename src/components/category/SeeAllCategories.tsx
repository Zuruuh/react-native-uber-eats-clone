import { setbottomPopper } from "reducers/bottomPopper/bottomPopperSlice";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
export default function SeeAllCategories() {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setbottomPopper("CategoryPopper"));
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
            alignItems: "center",
            justifyContent: "center",
            width: 85,
            height: 65,
          }}
        >
          <FontAwesome name="ellipsis-h" size={25} />
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "900",
          }}
        >
          See All
        </Text>
      </View>
    </TouchableOpacity>
  );
}
