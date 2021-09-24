import PlacesSearchBar from "components/home/search/PlacesSearchBar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import HeaderTabs from "components/home/header/HeaderTabs";
import Categories from "components/home/category/Categories";
import CategoryPopper from "components/home/category/CategoryPopper";
import PopperContainer from "components/home/popper/PopperContainer";
import RestaurantItems from "components/home/restaurant-items/RestaurantItems";
import Nav from "components/layout/navbar/Nav";
import SafeViewAndroid from "components/views/SafeViewAndroid";

interface props {
  navigation: any;
}

export default function Home({ navigation }: props) {
  return (
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        { backgroundColor: "#eee", flex: 1 },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <HeaderTabs />
          <PlacesSearchBar />
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
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  innerContainer: {
    width: "100%",
    height: "92%",
    padding: 15,
  },
});
