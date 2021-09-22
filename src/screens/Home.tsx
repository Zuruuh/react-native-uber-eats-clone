import PlacesSearchBar from "components/search/PlacesSearchBar";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderTabs from "components/header/HeaderTabs";
import Categories from "components/category/Categories";
import CategoryPopper from "components/category/CategoryPopper";
import PopperContainer from "components/popper/PopperContainer";
import RestaurantItems from "components/restaurant-items/RestaurantItems";
import Nav from "components/navbar/Nav";
import SafeViewAndroid from "components/views/SafeViewAndroid";

export default function Home() {
  return (
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        { backgroundColor: "#eee", flex: 1 },
      ]}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <PlacesSearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
      <Nav />
      <PopperContainer>
        <CategoryPopper />
      </PopperContainer>
    </SafeAreaView>
  );
}
