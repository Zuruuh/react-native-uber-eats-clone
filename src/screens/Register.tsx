import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import AuthDynamicStyle from "styles/Auth";
import React from "react";
import * as yup from "yup";
import { auth } from "store/firebase";
import Form from "components/forms/Form";
import FormInput from "components/forms/FormInput";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import FormSubmit from "components/forms/FormSubmit";
import { useDynamicValue } from "react-native-dynamic";
import ScreenStyles from "styles/Screens";

interface User {
  firstName: string;
  email: string;
  password: string;
}

const register = ({ firstName, email, password }: User, nav: any) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.user.updateProfile({ displayName: firstName }).then(() => {
        nav.navigate("address");
      });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert("Error", "This email is already in use !");
          break;
        case "auth/invalid-email":
          Alert.alert("Error", "Your email address is not valid");
          break;
        default:
          Alert.alert("Unhandled Exception", error.message);
          break;
      }
    });
};

const Schema = yup.object().shape({
  firstName: yup
    .string()
    .max(64, "Your first name is too long ! (Max is 64 chars)")
    .required("First name required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, "Your password should be at least 8 characters")
    .required("Password is required"),
});

interface props {
  navigation: any;
}
export default function Register({ navigation }: props) {
  const AuthStyle = useDynamicValue(AuthDynamicStyle);
  const styles = useDynamicValue(ScreenStyles);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[AuthStyle.container, styles.container]}>
        {/* <Image
          style={AuthStyle.image}
          source={require("assets/icons/uber-eats-logo-2.png")}
          resizeMode="contain"
        /> */}
        <View style={AuthStyle.titleContainer}>
          <Text style={AuthStyle.title}>Register</Text>
        </View>
        <View style={AuthStyle.formContainer}>
          <Form
            onSubmit={(values: User) => {
              register(values, navigation);
            }}
            validationSchema={Schema}
            initialValues={{ firstName: "", email: "", password: "" }}
          >
            <FormInput
              placeholder="First Name"
              title="firstName"
              icon={faUser}
            />
            <FormInput
              placeholder="Email address"
              title="email"
              icon={faAt}
              customProps={{ keyboardType: "email-address" }}
            />
            <FormInput
              placeholder="Password"
              title="password"
              icon={faLock}
              passwordField={true}
            />
            <FormSubmit text="Register" background="#2E64E5" />
          </Form>
        </View>
        <View style={AuthStyle.buttonContainer}>
          <View>
            <Text style={AuthStyle.buttonTitle}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
              }}
              activeOpacity={0.8}
              style={AuthStyle.buttonLink}
            >
              <View>
                <Text style={AuthStyle.buttonLinkText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
