import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, setCartItem } from "reducers/cart/cartSlice";
import { RootState } from "store/store";
import { CartItem } from "types/cart";
import { Menu } from "types/menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import QuantityPicker from "./QuantityPicker";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
interface props {
  item: Menu;
}

export default function MenuItem({ item }: props) {
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

  const dynamicStyles = new DynamicStyleSheet({
    menuItem: {
      flexDirection: "row",
      backgroundColor: new DynamicValue(
        palette.lightTertiary,
        palette.darkTertiary
      ),
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
      borderTopRightRadius: inCart ? 0 : 8,
      borderBottomLeftRadius: inCart ? 8 : 0,
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
      backgroundColor: palette.success,
      alignItems: "center",
    },
    text: {
      color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
    },
    smallText: {
      fontSize: 12,
    },
    quantityIcon: {
      marginVertical: 4,
      display: inCart ? "flex" : "none",
      opacity: inCart ? 1 : 0,
    },
  });

  const styles = useDynamicValue(dynamicStyles);

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          updateCart();
        }}
        style={styles.menuItem}
      >
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.text]}>{item.title}</Text>
          <Text style={[styles.text]}>{item.description}</Text>
          <Text style={[styles.price, styles.text]}>{item.price}€</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
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
