import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import SearchBar from "components/address/Searchbar";
import SafeViewAndroid from "components/views/SafeViewAndroid";
import Nav from "components/layout/navbar/Nav";
import Form from "components/forms/Form";
import FormInput from "components/forms/FormInput";
import FormSubmit from "components/forms/FormSubmit";
import * as yup from "yup";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { db } from "store/firebase";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ScreenStyles from "styles/Screens";
import {
  useDynamicValue,
  DynamicStyleSheet,
  DynamicValue,
} from "react-native-dynamic";
import palette from "styles/palette";

const Schema = yup.object().shape({
  name: yup.string().required("You have to choose a name"),
  address: yup.string().required("Adress is required"),
});

interface formSubmit {
  address: string;
  name: string;
}

interface props {
  navigation: any;
}

export default function AddressCreate({ navigation }: props) {
  const user = useSelector((state: RootState) => state.user.value);
  const create = ({ address, name }: formSubmit) => {
    // db.collection("addresses").doc(user.email)
    db.collection("addresses")
      .doc(user.email)
      .collection("addresses")
      .doc(name)
      .set(
        {
          address,
        },
        { merge: true }
      )
      .then(() => {
        setTimeout(() => {
          navigation.navigate("address");
        }, 1500);
      });
  };

  const screenStyles = useDynamicValue(ScreenStyles);
  const styles = useDynamicValue(dynamicStyles);

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.container}>
        <View style={[screenStyles.innerContainer, styles.innerContainer]}>
          <Text style={styles.title}>Create a new address</Text>
          <View style={styles.form}>
            <Form
              validationSchema={Schema}
              initialValues={{ name: "", address: "" }}
              onSubmit={(values) => create(values)}
            >
              <SearchBar name="address" />
              <FormInput
                title="name"
                placeholder="Name: (e.g: Home, Workplace, etc...)"
                icon={faTags}
              />
              <FormSubmit text="Create" background="#2E64E5" />
            </Form>
          </View>
        </View>
        <Nav nav={navigation} />
      </View>
    </SafeAreaView>
  );
}
const dynamicStyles = new DynamicStyleSheet({
  container: {
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  form: {
    width: "85%",
  },
  title: {
    fontSize: 24,
    color: new DynamicValue(palette.darkPrimary, palette.lightPrimary),
    textAlign: "center",
  },
});
