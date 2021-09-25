import CartItems from "components/order/CartItems";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import Button from "components/global/Button";
import palette from "styles/palette";

interface props {
  route: any;
  navigation: any;
}

export default function Order({ route, navigation }: props) {
  const cart = useSelector((state: RootState) => state.cart.value);
  const screenStyles = useDynamicValue(ScreenStyles);
  const styles = useDynamicValue(dynamicStyles);

  const redirectToDelivery = () => {
    navigation.navigate("delivery", {
      restaurant: route.params.restaurant,
      cart,
    });
  };

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={[screenStyles.container, styles.container]}>
        <Text style={[styles.title, styles.text]}> Your Cart 🛒</Text>
        <CartItems items={cart.products} />
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>
            Total: {Math.round(cart.totalPrice * 100) / 100}€
          </Text>
          <Button text="Next" onPress={redirectToDelivery} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    paddingTop: 20,
  },
  text: {
    textAlign: "center",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  title: {
    fontSize: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
});
