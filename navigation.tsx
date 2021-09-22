import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "screens/Home";
import Details from "screens/Details";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  } as StackNavigationOptions;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={screenOptions}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}