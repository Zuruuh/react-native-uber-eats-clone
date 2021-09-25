import Form from "components/forms/Form";
import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import Button from "components/global/Button";
import { db, timestamp } from "store/firebase";

interface props {
  navigation: any;
  route: any;
}

export default function Payment({ route, navigation }: props) {
  const screenStyles = useDynamicValue(ScreenStyles);
  const styles = useDynamicValue(dynamicStyles);
  const cart = useSelector((state: RootState) => state.cart.value);
  const user = useSelector((state: RootState) => state.user.value);
  const address = useSelector((state: RootState) => state.address.value);
  const [deliveryMan, setDeliveryMan] = React.useState(null);

  React.useEffect(() => {
    const createOrder = async () => {
      db.collection("orders").doc(user.email).collection("orders").add({
        restaurant: route.params.restaurant,
        products: cart.products,
        deliveredTo: address.address,
        date: timestamp,
      });
    };
    const fetchData = async () => {
      const data = await fetch("https://randomuser.me/api/?results=1");
      const json = await data.json();
      const res = json.results[0];
      setDeliveryMan({
        name: res.name.first + " " + res.name.last,
        avatar: res.picture.large,
      });
    };
    fetchData();
    createOrder();
  }, []);

  const redirectToHome = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={[screenStyles.container, styles.container]}>
        <View style={styles.innerContainer}>
          {deliveryMan && (
            <>
              <LottieView
                style={styles.checkIcon}
                source={require("../../assets/animations/check.json")}
                loop={false}
                autoPlay
                speed={0.7}
              />
              <Text style={[styles.text, styles.title]}>
                Your order at {route.params.restaurant} has been placed for a
                total of {Math.round(cart.totalPrice * 100) / 100}€ !
              </Text>
              <View style={styles.deliveryMan}>
                <Image
                  resizeMode="contain"
                  style={styles.avatar}
                  source={{ uri: deliveryMan.avatar }}
                />
                <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                    Your order will be delivered by:
                  </Text>
                  <Text style={[styles.text, styles.name]}>
                    {deliveryMan.name}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
        <Button text="Go back to home screen" onPress={redirectToHome} />
      </View>
    </SafeAreaView>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  checkIcon: {
    height: 125,
    alignSelf: "center",
    marginBottom: 25,
  },
  title: {
    width: "60%",
    textAlign: "center",
  },
  text: {
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  textWrapper: {
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  deliveryMan: {
    backgroundColor: new DynamicValue(
      palette.lightSecondary,
      palette.darkTertiary
    ),
    flexDirection: "row",
    marginTop: 20,
    padding: 5,
    width: "100%",
    borderRadius: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
