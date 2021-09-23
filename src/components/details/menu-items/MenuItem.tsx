import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, setCartItem } from "reducers/cart/cartSlice";
import { RootState } from "store/store";
import { CartItem } from "types/cart";
import { Menu } from "types/menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import QuantityPicker from "./QuantityPicker";

export default function MenuItem(props: { item: Menu }) {
  const { item } = props;
  const cart = useSelector((state: RootState) => state.cart.value);
  const [inCart, setInCart] = React.useState(false);
  const dispatch = useDispatch();

  const isItemInCart = (): boolean => {
    return !!cart.products.find((cartItem) => cartItem.productId === item.id);
  };

  const updateCart = () => {
    if (cart.products.find((cartItem) => cartItem.productId === item.id)) {
      setInCart(false);
      dispatch(deleteCartItem(item.id));
    } else {
      setInCart(true);
      dispatch(
        setCartItem({
          productId: item.id,
          quantity: 1,
          price: item.price,
        } as CartItem)
      );
    }
  };

  const styles = StyleSheet.create({
    menuItem: {
      flexDirection: "row",
      backgroundColor: "#eee",
      marginBottom: 10,
      borderRadius: 8,
      justifyContent: inCart ? "flex-start" : "space-between",
      maxHeight: 175,
      width: inCart ? "70%" : "100%",
    },
    image: {
      height: 175,
      width: "100%",
      borderTopLeftRadius: inCart ? 8 : 0,
      borderBottomLeftRadius: inCart ? 8 : 0,
      borderTopRightRadius: inCart ? 0 : 8,
      borderBottomRightRadius: inCart ? 0 : 8,
    },
    imageContainer: {
      height: 175,
      width: "100%",
      alignSelf: inCart ? "stretch" : "flex-start",
    },
    title: {
      fontSize: 19,
      fontWeight: "600",
    },
    textContainer: {
      padding: 5,
      width: inCart ? 0 : 240,
      display: inCart ? "none" : "flex",
      justifyContent: "space-evenly",
    },
    price: {
      fontWeight: "600",
    },
    quantityContainer: {
      width: inCart ? "30%" : 0,
      height: 175,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: "#1BA345",
      alignItems: "center",
    },
    smallText: {
      fontSize: 12,
      color: "#fff",
    },
    quantityIcon: {
      marginVertical: 4,
      display: inCart ? "flex" : "none",
      opacity: inCart ? 1 : 0,
    },
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          updateCart();
        }}
        style={styles.menuItem}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.price}>{item.price}€</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image}></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <FontAwesomeIcon
          style={styles.quantityIcon}
          icon={faCheckCircle}
          color={"#fff"}
          size={inCart ? 28 : 0}
        />
        <Text style={styles.smallText}>Product added !</Text>
        <Text style={styles.smallText}>Quantity:</Text>
        <QuantityPicker item={item} cart={setInCart} />
      </View>
    </View>
  );
}
