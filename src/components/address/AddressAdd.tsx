import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "components/global/Button";
import React from "react";
import { View, StyleSheet } from "react-native";

interface props {
  nav: any;
}

export default function AddressAdd({ nav }: props) {
  const redirect = () => {
    nav.navigate("addresscreate");
  };
  return (
    <View style={styles.container}>
      <Button onPress={redirect} text="New address" icon={faPlusCircle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
