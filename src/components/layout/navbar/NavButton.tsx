import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { navButton } from "types/nav";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setNavbar } from "reducers/navbar/navbarSlice";

interface props {
  button: navButton;
  nav: any;
}

export default function NavButton({ button, nav }: props) {
  const currentNav = useSelector((state: RootState) => state.navbar.value);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate(button.id);
        dispatch(setNavbar(button.id));
      }}
    >
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={button.icon}
          size={24}
          style={styles.icon}
          color={currentNav === button.id ? "#000" : "#5D5F63"}
        />
        <Text
          style={[
            {
              color: currentNav === button.id ? "#000" : "#5D5F63",
            },
            styles.text,
          ]}
        >
          {button.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
  },
});
