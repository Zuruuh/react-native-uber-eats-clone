import React from "react";
import { View } from "react-native";
import RestaurantItem from "./RestaurantItem";
// @ts-ignore
import { YELP_APIKEY } from "@env";
import { Restaurant, RestaurantCategory } from "types/restaurant";

export default function RestaurantItems(props: { nav: any }) {
  const YELP_API_URL =
    "https://api.yelp.com/v3/businesses/search?term=restaurant&limit=10&sort_by=distance&location=Livry-Gargan,France";
  const [restaurantsData, setRestaurantsData] = React.useState<
    Restaurant[] | any
  >([]);

  React.useEffect(() => {
    const fetchRestaurantsData = async () => {
      // setTimeout(() => {}, 2000);
      // Add a loading component
      const { businesses } = await (
        await fetch(YELP_API_URL, {
          headers: { Authorization: `Bearer ${YELP_APIKEY}` },
        })
      ).json();
      const data: Restaurant = businesses.map((restaurant: any) => {
        for (var i = 0; i < restaurant.distance / 30; i += 15) {}
        let { id, image_url, name, phone, categories } = restaurant;
        categories =
          categories === undefined ? [] : (categories as RestaurantCategory[]);
        return {
          id,
          address: restaurant.location.display_address,
          image_url,
          name,
          averageRating: restaurant.rating,
          phone,
          deliveryTime: i,
          reviewCount: restaurant.review_count,
          categories,
        } as Restaurant;
      });
      setRestaurantsData(data);
    };
    fetchRestaurantsData();
  }, []);
  return (
    <View style={{ marginTop: 10, padding: 15, backgroundColor: "#eee" }}>
      {restaurantsData.map((restaurant, index) => (
        <RestaurantItem key={index} restaurant={restaurant} nav={props.nav} />
      ))}
    </View>
  );
}
