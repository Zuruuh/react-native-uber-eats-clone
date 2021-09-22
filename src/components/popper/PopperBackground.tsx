import { setbottomPopper } from "features/bottomPopper/bottomPopperSlice";
import React from "react";
import { Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";

export default function PopperBackground() {
  const activeBottomPopper = useSelector(
    (state: RootState) => state.bottomPopper.value
  );
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setbottomPopper(""));
      }}
    >
      <View
        style={{
          flexGrow: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: activeBottomPopper ? "flex" : "none",
          width: "100%",
          height: "100%",
        }}
      ></View>
    </Pressable>
  );
}
