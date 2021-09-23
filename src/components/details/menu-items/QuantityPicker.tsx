import React from "react";
import { View, Keyboard, StyleSheet, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { deleteCartItem, setCartItem } from "reducers/cart/cartSlice";
import { Menu } from "types/menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "types/cart";

export default function QuantityPicker(props: { item: Menu; cart: Function }) {
  const { item, cart } = props;
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(item.price);
  const dispatch = useDispatch();
  const handleInput = (value: string, action: string = ""): void => {
    value = value.toString().replace(/\D/gi, "");

    if (value !== "") {
      if (parseInt(value) < 1) {
        dispatch(deleteCartItem(item.id));
        Keyboard.dismiss();
        cart(false);
        setQuantity(1);
        return;
      }
      let realQuantity: number = quantity;
      if (action === "+") {
        realQuantity++;
      } else if (action === "-") {
        realQuantity--;
      }
      dispatch(
        setCartItem({
          productId: item.id,
          quantity: realQuantity,
          price: item.price,
        } as CartItem)
      );
    }
    setPrice(item.price * +value);
    setQuantity(+value);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      zIndex: 3,
    },
    input: {
      textAlign: "center",
      width: 32,
      paddingVertical: 0,
      paddingHorizontal: 2,
    },
    button: {
      backgroundColor: "#eee",
      width: 32,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    price: {
      color: "#fff",
      marginTop: 10,
      fontSize: 16,
      textDecorationLine: "underline",
    },
  });

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleInput((quantity + 1).toString(), "+");
          }}
        >
          <FontAwesomeIcon size={20} icon={faCaretUp} />
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          value={quantity.toString()}
          style={styles.input}
          onChangeText={(val) => handleInput(val)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleInput((quantity - 1).toString(), "-");
          }}
        >
          <FontAwesomeIcon size={20} icon={faCaretDown} />
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>{Math.round(price * 100) / 100}€</Text>
    </>
  );
}
