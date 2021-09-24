import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { navButton } from "types/nav";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setNavbar } from "reducers/navbar/navbarSlice";
import { useDarkMode } from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  button: navButton;
  nav: any;
}

export default function NavButton({ button, nav }: props) {
  const currentNav = useSelector((state: RootState) => state.navbar.value);
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  let color;
  darkMode
    ? currentNav === button.id
      ? palette.lightPrimary
      : palette.lightTertiary
    : currentNav === button.id
    ? palette.darkPrimary
    : palette.darkSecondary;
  if (darkMode) {
    if (currentNav === button.id) {
      color = palette.lightPrimary;
    } else {
      color = palette.lightAccent;
    }
  } else {
    if (currentNav === button.id) {
      color = palette.darkPrimary;
    } else {
      color = palette.darkSecondary;
    }
  }
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
          color={color}
        />
        <Text
          style={[
            {
              color,
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
