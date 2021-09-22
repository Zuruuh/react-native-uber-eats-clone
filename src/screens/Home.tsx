import PlacesSearchBar from "components/search/PlacesSearchBar";
import React from "react";
import { View } from "react-native";
import HeaderTabs from "components/header/HeaderTabs";

export default function Home() {
  return (
    <View style={{ backgroundColor: "white", padding: 15 }}>
      <HeaderTabs />
      <PlacesSearchBar />
    </View>
  );
}
