import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
  useDarkMode,
} from "react-native-dynamic";
import palette from "styles/palette";
interface props {
  route: any;
  nav: any;
}

export default function ViewCart({ route, nav }: props) {
  const cart = useSelector((state: RootState) => state.cart.value);
  const styles = useDynamicValue(dynamicStyles);
  const darkMode = useDarkMode();

  return (
    <>
      {cart.products.length > 0 && (
        <>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  nav.navigate("order", { restaurant: route.params.restaurant })
                }
                activeOpacity={0.8}
              >
                <View></View>

                <View style={styles.buttonInnerContainer}>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color={
                      darkMode ? palette.lightPrimary : palette.darkPrimary
                    }
                    size={20}
                  />
                  <Text style={[styles.text, styles.buttonText]}>
                    {" "}
                    View Cart
                  </Text>
                </View>
                <View>
                  <Text style={[styles.text, styles.price]}>
                    {cart.totalPrice !== NaN
                      ? Math.round(cart.totalPrice * 100) / 100 + "€"
                      : ""}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    width: 300,
    marginTop: 20,
    padding: 13,
    borderRadius: 30,
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkPrimary
    ),
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  buttonText: {
    fontSize: 18,
  },
  buttonInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
  },
});
