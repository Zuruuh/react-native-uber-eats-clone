import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import CheckoutItem from "./CheckoutItem";

export default function ViewCart(props: { nav: any; route: any }) {
  const cart = useSelector((state: RootState) => state.cart.value);
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const styles = StyleSheet.create({
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
      backgroundColor: "black",
      alignItems: "center",
      position: "relative",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
    },
    buttonInnerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    price: {
      color: "#fff",
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 30,
      zIndex: 5,
    },
    modal: {
      width: "100%",
      backgroundColor: "#fff",
      alignItems: "center",
      height: "60%",
    },
    modalButton: {
      backgroundColor: "#000",
      padding: 10,
      borderRadius: 30,
      width: 150,
      alignItems: "center",
      marginTop: 20,
    },
    modalTitle: {
      color: "#fff",
    },
  });

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisibility(false)}
          >
            <Text style={styles.modalTitle}>Checkout</Text>
          </TouchableOpacity>
          {cart.products.map((product) => {
            <CheckoutItem />;
          })}
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisibility}
        transparent={true}
        onRequestClose={() => setModalVisibility(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {cart.products.length > 0 && (
        <>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisibility(true)}
                activeOpacity={0.8}
              >
                <View></View>
                <View style={styles.buttonInnerContainer}>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="#fff"
                    size={20}
                  />
                  <Text style={styles.buttonText}> View Cart</Text>
                </View>
                <View>
                  <Text style={styles.price}>
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
