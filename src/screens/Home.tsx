import PlacesSearchBar from "components/search/PlacesSearchBar";
import React from "react";
import { ScrollView, View } from "react-native";
import HeaderTabs from "components/header/HeaderTabs";
import Categories from "components/category/Categories";
import CategoryPopper from "components/category/CategoryPopper";
import PopperContainer from "components/popper/PopperContainer";
import RestaurantItems from "components/restaurant-items/RestaurantItems";

export default function Home() {
  return (
    <>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <PlacesSearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
      <PopperContainer>
        <CategoryPopper />
      </PopperContainer>
    </>
  );
}
