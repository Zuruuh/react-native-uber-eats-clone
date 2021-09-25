import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "components/details/about/About";
import MenuItems from "components/details/menu-items/MenuItems";
import { useDarkMode } from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  route: any;
  navigation: any;
}

export default function Details({ route, navigation }: props) {
  const darkMode = useDarkMode();
  return (
    <>
      <View
        style={{
          height: "100%",
          backgroundColor: darkMode
            ? palette.darkPrimary
            : palette.lightPrimary,
        }}
      >
        <About route={route} />
        <Divider
          color={darkMode ? palette.darkTertiary : palette.lightTertiary}
          width={1.8}
          style={{ marginTop: 20, marginBottom: 10 }}
        />
        <View style={{ flex: 1 }}>
          <MenuItems nav={navigation} route={route} />
        </View>
      </View>
    </>
  );
}
