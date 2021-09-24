import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "store/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setAddress } from "reducers/address/addressSlice";
import { Address } from "types/address";

export default function AddressSelector() {
  const activeAddress = useSelector((state: RootState) => state.address.value);
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const [pickedAddress, setPickedAddress] = React.useState(
    JSON.stringify(activeAddress)
  );
  const [snapshot, loading] = useCollection(
    db.collection("addresses").doc(user.email).collection("addresses")
  );

  React.useEffect(() => {
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
  }, []);

  React.useEffect(() => {
    dispatch(setAddress(JSON.parse(pickedAddress)));
  }, [pickedAddress]);

  return (
    <View>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <>
          {snapshot?.docs.length > 0 && (
            <Picker
              selectedValue={pickedAddress}
              onValueChange={(itemValue, itemIndex) =>
                setPickedAddress(itemValue)
              }
            >
              {snapshot?.docs?.map((doc, index) => (
                <Picker.Item
                  key={doc.id}
                  label={doc.id}
                  value={JSON.stringify({
                    name: doc.id,
                    email: user.email,
                    address: doc.data().address,
                  } as Address)}
                />
              ))}
            </Picker>
          )}
          {snapshot?.docs.length === 0 && (
            <Text style={styles.text}>
              You don't have any registered addresses yet ! Add one in the
              address tab, then come back
            </Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
