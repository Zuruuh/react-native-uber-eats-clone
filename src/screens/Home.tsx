import PlacesSearchBar from "components/search/PlacesSearchBar";
import React from "react";
import { View } from "react-native";
import HeaderTabs from "components/header/HeaderTabs";
import Categories from "components/category/Categories";
import CategoryPopper from "components/category/CategoryPopper";
import PopperContainer from "components/popper/PopperContainer";

export default function Home() {
  return (
    <>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <PlacesSearchBar />
        <Categories />
      </View>
      <PopperContainer>
        <CategoryPopper />
      </PopperContainer>
    </>
  );
}
// 55 minutes
