import PlacesSearchBar from "components/home/search/PlacesSearchBar";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderTabs from "components/home/header/HeaderTabs";
import Categories from "components/home/category/Categories";
import CategoryPopper from "components/home/category/CategoryPopper";
import PopperContainer from "components/home/popper/PopperContainer";
import RestaurantItems from "components/home/restaurant-items/RestaurantItems";
import Nav from "components/layout/navbar/Nav";
import SafeViewAndroid from "components/views/SafeViewAndroid";

export default function Home(props: { navigation: any }) {
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
        <RestaurantItems nav={props.navigation} />
      </ScrollView>
      <Nav />
      <PopperContainer>
        <CategoryPopper />
      </PopperContainer>
    </SafeAreaView>
  );
}
