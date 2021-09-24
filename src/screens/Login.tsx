import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React from "react";
import * as yup from "yup";
import AuthStyle from "styles/Auth";
import { auth } from "store/firebase";
import Form from "components/forms/Form";
import FormInput from "components/forms/FormInput";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import FormSubmit from "components/forms/FormSubmit";
import FormCheckbox from "components/forms/FormCheckbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUser } from "reducers/user/userSlice";
import SafeViewAndroid from "components/views/SafeViewAndroid";

interface User {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

interface props {
  navigation: any;
}
export default function Login({ navigation }: props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const rememberUser = async (): Promise<any> => {
      await AsyncStorage.setItem("@user", "mB1NbzVCEOMLG08CJIAqRdYNoOV2");
      const uid = await AsyncStorage.getItem("@user");
      return uid;
    };
  }, []);

  const login = ({ email, password, rememberMe }: User, nav: any) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(
          setUser({
            id: user.user.uid,
            name: user.user.providerData[0].displayName,
            email,
          })
        );
        if (rememberMe) {
          AsyncStorage.setItem("@user", user.user.uid);
        }
        nav.navigate("home");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            Alert.alert("Error", "Your password is incorrect");
            break;
          case "auth/user-not-found":
            Alert.alert("Error", "This email is not in use");
            break;
          default:
            Alert.alert(
              "Unhandled Exception",
              error.code + " : " + error.message
            );
            break;
        }
      });
  };
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={AuthStyle.container}>
        <Image
          style={AuthStyle.image}
          source={require("assets/icons/uber-eats-logo-2.png")}
          resizeMode="contain"
        />
        <View style={AuthStyle.titleContainer}>
          <Text style={AuthStyle.title}>Register</Text>
        </View>
        <View style={AuthStyle.formContainer}>
          <Form
            onSubmit={(values: User) => {
              login(values, navigation);
            }}
            validationSchema={Schema}
            initialValues={{ email: "", password: "", rememberMe: false }}
          >
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
            <FormCheckbox title="rememberMe" label="Stay logged in ?" />
            <FormSubmit text="Login" background="#2E64E5" />
          </Form>
        </View>
        <View style={AuthStyle.buttonContainer}>
          <View>
            <Text style={AuthStyle.buttonTitle}>
              Don't have an account yet ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("register");
              }}
              activeOpacity={0.8}
              style={AuthStyle.buttonLink}
            >
              <View>
                <Text style={AuthStyle.buttonLinkText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
