import AddressAdd from "components/address/AddressAdd";
import AddressList from "components/address/AddressList";
import Nav from "components/layout/navbar/Nav";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
interface props {
  navigation: any;
}

export default function Address({ navigation }: props) {
  const screenStyles = useDynamicValue(ScreenStyles);
  const styles = useDynamicValue(dynamicStyles);

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.container}>
        <View style={[screenStyles.innerContainer, styles.container]}>
          <View>
            <Text style={styles.title}>Your saved addresses 👇</Text>
          </View>
          <AddressList nav={navigation} />
          <AddressAdd nav={navigation} />
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    paddingTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
});
