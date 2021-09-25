import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ScreenStyles from "styles/Screens";
import { useDynamicValue } from "react-native-dynamic";
import Map from "components/delivery/Map";

interface props {
  navigation: any;
  route: any;
}

export default function Delivery({ navigation, route }: props) {
  const current = useSelector((state: RootState) => state.address.value);
  const screenStyles = useDynamicValue(ScreenStyles);
  const cart = useSelector((state: RootState) => state.cart.value);
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={{ flex: 1 }}>
        <Map
          current={current}
          destination={route.params.restaurant.address.join(" ")}
          destinationName={route.params.restaurant.name}
          total={cart.totalPrice}
          nav={navigation}
          user={user}
        />
      </View>
    </SafeAreaView>
  );
}
