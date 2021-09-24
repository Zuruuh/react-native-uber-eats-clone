import UserActions from "components/account/UserActions";
import UserInfo from "components/account/UserInfo";
import Nav from "components/layout/navbar/Nav";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ScreenStyles from "styles/Screens";
import { useDynamicValue } from "react-native-dynamic";
interface props {
  navigation: any;
}

export default function Account({ navigation }: props) {
  const user = useSelector((state: RootState) => state.user.value);
  const styles = useDynamicValue(ScreenStyles);

  return (
    <SafeAreaView style={styles.safeArea}>
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
