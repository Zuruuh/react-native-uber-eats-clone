import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "screens/Home";
import Details from "screens/Details";
import Onboarding from "screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "screens/Login";
import Register from "screens/Register";
import Account from "screens/Account";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const [firstLaunch, setFirstLaunch] = React.useState(true);
  const screenOptions = {
    headerShown: false,
  } as StackNavigationOptions;

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (!value) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={firstLaunch ? "login" : "login"}
        screenOptions={screenOptions}
      >
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
