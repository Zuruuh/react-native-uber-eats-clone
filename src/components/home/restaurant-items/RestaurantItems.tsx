import React from "react";
import { View } from "react-native";
import RestaurantItem from "./RestaurantItem";
// @ts-ignore
import { YELP_APIKEY } from "@env";
import { Restaurant, RestaurantCategory } from "types/restaurant";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

interface props {
  nav: any;
}

export default function RestaurantItems({ nav }: props) {
  const activeAddress = useSelector((state: RootState) => state.address.value);
  const [restaurantsData, setRestaurantsData] = React.useState<
    Restaurant[] | any
  >([]);

  React.useEffect(() => {
    const fetchRestaurantsData = async () => {
      const city = activeAddress?.address?.split(",")[0];
      const YELP_API_URL = `https://api.yelp.com/v3/businesses/search?term=restaurant&limit=10&sort_by=distance&location=${
        city ?? "Paris"
      }`;

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
  }, [activeAddress]);
  return (
    <View style={{ marginTop: 10, padding: 15, backgroundColor: "#eee" }}>
      {restaurantsData.map((restaurant, index) => (
        <RestaurantItem key={index} restaurant={restaurant} nav={nav} />
      ))}
    </View>
  );
}
