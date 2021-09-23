import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Onboard from "react-native-onboarding-swiper";

export default function Onboarding(props: { navigation: any }) {
  const styles = StyleSheet.create({
    icon: {
      width: 300,
      height: 300,
    },
    button: {
      marginHorizontal: 8,
    },
  });

  return (
    <Onboard
      onSkip={() => props.navigation.replace("login")}
      onDone={() => props.navigation.navigate("login")}
      DoneButtonComponent={(props) => (
        <TouchableOpacity {...props} style={styles.button}>
          <Text>Done</Text>
        </TouchableOpacity>
      )}
      pages={[
        {
          backgroundColor: "#000",
          image: (
            <Image
              source={require("assets/icons/uber-eats-logo-1.png")}
              style={styles.icon}
            />
          ),
          title: "Welcome to uber eats !",
          subtitle: "",
        },
        // {
        //   backgroundColor: "#fff",
        //   // image: <Image source={require("assets/images/login")} /> Take screenshot when login page is done
        //   title: "login + register",
        //   subtitle: "",
        // },
        {
          backgroundColor: "#D15C5F",
          image: (
            <Image
              style={styles.icon}
              source={require("assets/icons/restaurant.png")}
            />
          ),
          title: "Eat the same food you would do as usual !",
          subtitle: "All your favorites restaurants are on Uber Eats !",
        },
        {
          backgroundColor: "#F4C669",
          image: (
            <Image
              style={styles.icon}
              source={require("assets/icons/delivery1.png")}
            />
          ),
          title: "Get delivered",
          subtitle:
            "Our delivery do their best to get you your meal as fast as possible",
        },
        {
          backgroundColor: "#4165AD",
          image: (
            <Image
              style={styles.icon}
              source={require("assets/icons/delivery2.png")}
            />
          ),
          title: "Or set a meeting point with your delivery man",
          subtitle: "And save some time",
        },
      ]}
    />
  );
}
