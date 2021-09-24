import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { setTab } from "reducers/tabs/tabSlice";
import { useDarkMode } from "react-native-dynamic";
import palette from "styles/palette";

export default function HeaderButton(props: { text: string }) {
  const activeTab = useSelector((state: RootState) => state.tab.value);
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  return (
    <TouchableOpacity
      style={{
        backgroundColor:
          activeTab === props.text
            ? darkMode
              ? palette.lightPrimary
              : palette.darkSecondary
            : palette.darkSecondary,
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
          color:
            activeTab === props.text
              ? darkMode
                ? palette.darkPrimary
                : palette.lightPrimary
              : palette.lightPrimary,
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
