import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { User } from "types/user";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

interface props {
  user: User;
}

export default function UserInfo({ user }: props) {
  const styles = useDynamicValue(dynamicStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={{
            uri: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
          }}
        />
        <View style={styles.badgeInner}>
          <Text style={styles.name}>{user?.name ?? ""}jqsdhjhjqsgfhjqgdq</Text>
          <Text style={styles.email}>{user?.email ?? ""}</Text>
        </View>
      </View>
    </View>
  );
}

const dynamicStyles = new DynamicStyleSheet({
  container: {
    width: "100%",
    alignItems: "center",
  },
  dividers: {
    marginVertical: 15,
  },
  title: {
    fontWeight: "900",
    fontSize: 60,
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  image: {
    width: "25%",
  },
  innerContainer: {
    width: "90%",
    minHeight: 150,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: new DynamicValue(
      palette.lightPrimary,
      palette.darkTertiary
    ),
  },
  badgeInner: {
    paddingLeft: 5,
    marginLeft: 5,
    borderLeftWidth: 1,
    borderColor: new DynamicValue(palette.darkTertiary, palette.lightTertiary),
    justifyContent: "space-between",
    width: "75%",
  },
  name: {
    width: "100%",
    fontSize: 30,
    fontWeight: "600",
    flex: 1,
    flexWrap: "wrap",
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
  },
  email: {
    marginBottom: 5,
    color: "gray",
  },
});
