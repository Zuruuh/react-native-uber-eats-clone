import AsyncStorage from "@react-native-async-storage/async-storage";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "components/global/Button";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "reducers/user/userSlice";

interface props {
  nav: any;
}

export default function UserActions({ nav }: props) {
  const dispatch = useDispatch();
  const logout = () => {
    try {
      AsyncStorage.removeItem("user").then(() => {
        nav.navigate("login");
        dispatch(logOut());
      });
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <Button text="Log Out" onPress={logout} icon={faSignOutAlt} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
