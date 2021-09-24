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

interface props {
  address: Address;
  nav: any;
}

export default function AddressButton({ address, nav }: props) {
  const activeAddress = useSelector((state: RootState) => state.address.value);
  const dispatch = useDispatch();
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
        <Text style={styles.title}>{address.name}</Text>
        <Text>{address.address}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={deleteAddress} style={styles.deleteButton}>
          <FontAwesomeIcon icon={faTrashAlt} size={24} color="#f00" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    backgroundColor: "#ccc",
    borderRadius: 15,
    position: "relative",
  },
  textContainer: {
    marginLeft: 2,
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
