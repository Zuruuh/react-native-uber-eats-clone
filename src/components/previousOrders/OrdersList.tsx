import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { db } from "store/firebase";
import { RootState } from "store/store";
import OrderItem from "./OrderItem";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

export default function OrdersList() {
  const user = useSelector((state: RootState) => state.user.value);
  const [snapshot, loading] = useCollection(
    db.collection("orders").doc(user.email).collection("orders")
  );
  const styles = useDynamicValue(dynamicStyles);

  return (
    <View>
      {!loading && (
        <ScrollView>
          {snapshot?.docs?.map((doc, index) => {
            return <OrderItem key={doc.id + index} order={doc.data()} />;
          })}
          {snapshot?.docs?.length === 0 && (
            <Text style={styles.text}>You have no orders</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}
const dynamicStyles = new DynamicStyleSheet({
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
    textAlign: "center",
    fontSize: 24,
    marginTop: "20%",
  },
});
