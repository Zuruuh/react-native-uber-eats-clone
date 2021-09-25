import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import HeaderTabs from "components/home/header/HeaderTabs";
import Categories from "components/home/category/Categories";
import RestaurantItems from "components/home/restaurant-items/RestaurantItems";
import Nav from "components/layout/navbar/Nav";
import AddressSelector from "components/home/address/AddressSelector";
import ScreenStyles from "styles/Screens";
import { useDynamicValue } from "react-native-dynamic";
import { useDispatch } from "react-redux";
import { clearCart } from "reducers/cart/cartSlice";

interface props {
  navigation: any;
}

export default function Home({ navigation }: props) {
  const screen = useDynamicValue(ScreenStyles);
  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <SafeAreaView style={screen.safeArea}>
      <View style={screen.container}>
        <View style={screen.innerContainer}>
          <View style={styles.topBar}>
            <HeaderTabs />
            <AddressSelector />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems nav={navigation} />
          </ScrollView>
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingVertical: 5,
  },
});
