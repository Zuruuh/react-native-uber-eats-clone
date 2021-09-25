import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import Ionicon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useFormikContext } from "formik";
import FormError from "components/forms/FormError";

interface props {
  name: string;
}

export default function PlacesSearchBar({ name }: props) {
  const { handleChange, errors, touched, setFieldValue } = useFormikContext();
  const handle = (data: GooglePlaceData, details: GooglePlaceDetail = null) => {
    setFieldValue(name, data.description);
    handleChange(name);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={3}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          styles={{
            textInput: {
              backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,
            },
            textInputContainer: {
              backgroundColor: "#eee",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
            },
          }}
          onPress={(data, details = null) => {
            handle(data, details);
          }}
          renderLeftButton={() => (
            <View style={styles.leftIcon}>
              <Ionicon name="location-sharp" size={24} />
            </View>
          )}
          renderRightButton={() => (
            <View style={styles.rightComponent}>
              <AntDesign
                name="clockcircle"
                size={11}
                style={styles.rightIcon}
              />
              <Text>Search</Text>
            </View>
          )}
        />
      </View>
      <FormError error={errors[name]} shown={!!touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "column",
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  rightComponent: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
  rightIcon: {
    marginLeft: 6,
  },
  leftIcon: {
    marginLeft: 10,
  },
});
