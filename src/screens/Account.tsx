import UserActions from "components/account/UserActions";
import UserInfo from "components/account/UserInfo";
import Nav from "components/layout/navbar/Nav";
import SafeViewAndroid from "components/views/SafeViewAndroid";
import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

interface props {
  navigation: any;
}

export default function Account({ navigation }: props) {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        { backgroundColor: "#eee", flex: 1 },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <UserInfo user={user} />
          <UserActions nav={navigation} />
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  innerContainer: {
    height: "92%",
  },
});
