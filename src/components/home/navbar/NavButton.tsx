import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { navButton } from "types/nav";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setNavbar } from "reducers/navbar/navbarSlice";

export default function NavButton(props: { button: navButton }) {
  const currentNav = useSelector((state: RootState) => state.navbar.value);
  const dispatch = useDispatch();
  //#EDECED
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setNavbar(props.button.id));
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={props.button.icon}
          size={24}
          style={{
            alignSelf: "center",
          }}
          color={currentNav === props.button.id ? "#000" : "#5D5F63"}
        />
        <Text
          style={{
            color: currentNav === props.button.id ? "#000" : "#5D5F63",
          }}
        >
          {props.button.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
