import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import PopperBackground from "./PopperBackground";

export default function PopperContainer(props) {
  const activeBottomPopper = useSelector(
    (state: RootState) => state.bottomPopper.value
  );
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: activeBottomPopper ? 5 : -5,
        display: activeBottomPopper ? "flex" : "none",
        width: "100%",
        height: "100%",
      }}
    >
      <PopperBackground />
      {props.children}
    </View>
  );
}
