import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "reducers/address/addressSlice";
import { db } from "store/firebase";
import { RootState } from "store/store";
import { Address } from "types/address";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  address: Address;
  nav: any;
}

export default function AddressButton({ address, nav }: props) {
  const dispatch = useDispatch();
  const styles = useDynamicValue(dynamicStyles);
  const deleteAddress = () => {
    db.collection("addresses")
      .doc(address.email)
      .collection("addresses")
      .doc(address.name)
      .delete();
    dispatch(setAddress({ name: null, email: null, address: null }));
    nav.navigate("home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, styles.text]}>{address.name}</Text>
        <Text style={styles.text}>{address.address}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={deleteAddress} style={styles.deleteButton}>
          <FontAwesomeIcon icon={faTrashAlt} size={24} color={palette.error} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkTertiary
    ),
    borderRadius: 15,
    position: "relative",
  },
  textContainer: {
    marginLeft: 2,
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    height: "100%",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    right: 10,
    transform: [{ translateY: -12 }],
  },
  deleteButton: {
    width: 32,
  },
});
