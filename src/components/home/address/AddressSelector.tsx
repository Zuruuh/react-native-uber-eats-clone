import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "store/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { setAddress } from "reducers/address/addressSlice";
import { Address } from "types/address";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
  useDarkMode,
} from "react-native-dynamic";
import palette from "styles/palette";

export default function AddressSelector() {
  const activeAddress = useSelector((state: RootState) => state.address.value);
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
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

  const styles = useDynamicValue(dynamicStyles);

  return (
    <View>
      {loading && <Text style={styles.text}>Loading</Text>}
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
                  color={"grey"}
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

const dynamicStyles = new DynamicStyleSheet({
  text: {
    textAlign: "center",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  modal: {
    backgroundColor: "#f00",
  },
});
