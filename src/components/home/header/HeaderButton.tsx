import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
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
      style={[
        {
          backgroundColor: darkMode
            ? activeTab === props.text
              ? palette.lightPrimary
              : palette.darkSecondary
            : activeTab === props.text
            ? palette.darkPrimary
            : palette.lightSecondary,
        },
        styles.container,
      ]}
      onPress={() => {
        dispatch(setTab(props.text));
      }}
    >
      <Text
        style={[
          {
            color: darkMode
              ? activeTab === props.text
                ? palette.darkSecondary
                : palette.lightPrimary
              : activeTab === props.text
              ? palette.lightPrimary
              : palette.darkPrimary,
          },
          styles.text,
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
});
