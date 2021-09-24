import { FormikErrors } from "formik";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface props {
  error: string;
  shown: boolean;
}

export default function FormError({ error, shown }: props) {
  if (!error || !shown) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
  },
  message: {
    color: "#f00",
  },
});
