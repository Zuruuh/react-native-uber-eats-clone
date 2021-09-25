import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "store/firebase";
import { RootState } from "store/store";
import { useCollection } from "react-firebase-hooks/firestore";
import AddressButton from "./AddressButton";
import { setAddress } from "reducers/address/addressSlice";
import { Address } from "types/address";

interface props {
  nav: any;
}

export default function AddressList({ nav }: props) {
  const user = useSelector((state: RootState) => state.user.value);
  const activeAddress = useSelector((state: RootState) => state.address.value);
  const dispatch = useDispatch();

  const [snapshot] = useCollection(
    db.collection("addresses").doc(user.email).collection("addresses")
  );

  if (!activeAddress.name && snapshot?.docs?.length > 0) {
    const address = snapshot.docs[0];
    dispatch(
      setAddress({
        name: address.id,
        email: user.email,
        address: address.data().address,
      } as Address)
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {snapshot?.docs?.map((doc) => (
          <AddressButton
            key={doc.id}
            address={{
              name: doc.id,
              address: doc.data()?.address,
              email: user.email,
            }}
            nav={nav}
          />
        ))}
      </ScrollView>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
