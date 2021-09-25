import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import Nav from "components/layout/navbar/Nav";
import ordersList from "components/previousOrders/OrdersList";
import OrdersList from "components/previousOrders/OrdersList";

interface props {
  navigation: any;
}

export default function PreviousOrders({ navigation }: props) {
  const screenStyles = useDynamicValue(ScreenStyles);
  //   const styles = useDynamicValue(dynamicStyles);
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.container}>
        <View style={screenStyles.innerContainer}>
          <OrdersList />
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}

// const dynamicStyles = new DynamicStyleSheet({});
