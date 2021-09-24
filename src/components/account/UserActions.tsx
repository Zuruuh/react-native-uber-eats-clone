import AsyncStorage from "@react-native-async-storage/async-storage";
import { faMoon, faSignOutAlt, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "components/global/Button";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "reducers/user/userSlice";
import { setNavbar } from "reducers/navbar/navbarSlice";
import { useDarkMode } from "react-native-dynamic";
import palette from "styles/palette";
import { toggle } from "reducers/mode/displayModeSlice";

interface props {
  nav: any;
}

export default function UserActions({ nav }: props) {
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  const logout = () => {
    try {
      AsyncStorage.removeItem("user").then(() => {
        nav.navigate("login");
        dispatch(logOut());
        dispatch(setNavbar("home"));
      });
    } catch (err) {}
  };

  const toggleDarkMode = () => {
    dispatch(toggle());
  };

  return (
    <View style={styles.container}>
      <Button text="Log Out" onPress={logout} icon={faSignOutAlt} />
      <Button
        text="Toggle Dark Mode"
        onPress={toggleDarkMode}
        icon={darkMode ? faSun : faMoon}
        color={darkMode ? palette.darkPrimary : palette.lightPrimary}
        background={darkMode ? palette.lightPrimary : palette.darkPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
