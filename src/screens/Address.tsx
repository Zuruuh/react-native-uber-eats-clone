import AddressAdd from "components/address/AddressAdd";
import AddressList from "components/address/AddressList";
import Nav from "components/layout/navbar/Nav";
import SafeViewAndroid from "components/views/SafeViewAndroid";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

interface props {
  navigation: any;
}

export default function Address({ navigation }: props) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>Your saved addresses 👇</Text>
          </View>
          <AddressList nav={navigation} />
          <AddressAdd nav={navigation} />
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    height: "92%",
    paddingHorizontal: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
});
