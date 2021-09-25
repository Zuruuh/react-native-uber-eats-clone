import LottieView from "lottie-react-native";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";
import Nav from "components/layout/navbar/Nav";

interface props {
  navigation: any;
}

export default function Search({ navigation }: props) {
  const screenStyles = useDynamicValue(ScreenStyles);
  const styles = useDynamicValue(dynamicStyles);
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.container}>
        <View style={[screenStyles.innerContainer, styles.innerContainer]}>
          <Text style={styles.text}>
            We searched in every single file of this app, but we weren't able to
            find this feature 🙁
          </Text>
          <Text style={styles.text}>
            (Who knows, maybe it hasn't been added yet 😏)
          </Text>
          <LottieView
            source={require("../../assets/animations/search.json")}
            autoPlay
            speed={0.8}
            loop={true}
            style={styles.animation}
          />
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}
const dynamicStyles = new DynamicStyleSheet({
  text: {
    textAlign: "center",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  innerContainer: {
    padding: 50,
    paddingTop: 500,
  },
  animation: {
    marginTop: 0,
  },
});
