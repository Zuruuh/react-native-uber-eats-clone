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
import Address from "screens/Address";
import AddressCreate from "screens/AddressCreate";
import { ColorSchemeProvider } from "react-native-dynamic";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import Delivery from "screens/Delivery";
import Order from "screens/Order";
import Search from "screens/Search";
import Payment from "screens/Payment";
import PreviousOrders from "screens/PreviousOrders";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const [firstLaunch, setFirstLaunch] = React.useState(true);
  const screenOptions = {
    headerShown: false,
  } as StackNavigationOptions;
  const darkMode = useSelector((state: RootState) => state.mode.value);

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (!value) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      }
    });
  }, []);

  return (
    <ColorSchemeProvider mode={!darkMode ? "dark" : "light"}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={firstLaunch ? "onboarding" : "login"}
          screenOptions={screenOptions}
        >
          <Stack.Screen name="previous-orders" component={PreviousOrders} />
          <Stack.Screen name="addresscreate" component={AddressCreate} />
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="delivery" component={Delivery} />
          <Stack.Screen name="account" component={Account} />
          <Stack.Screen name="details" component={Details} />
          <Stack.Screen name="address" component={Address} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="browse" component={Search} />
          <Stack.Screen name="order" component={Order} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorSchemeProvider>
  );
}
