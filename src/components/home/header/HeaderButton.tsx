import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { setTab } from "reducers/tabs/tabSlice";

export default function HeaderButton(props: { text: string }) {
  const activeTab = useSelector((state: RootState) => state.tab.value);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === props.text ? "#000" : "#fff",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        dispatch(setTab(props.text));
      }}
    >
      <Text
        style={{
          color: activeTab === props.text ? "#fff" : "#000",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
