import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useFormikContext } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormError from "./FormError";

interface props {
  title: string;
  placeholder: string;
  icon: IconProp;
  passwordField?: boolean;
  customProps?: Object;
}

export default function FormInput({
  title,
  placeholder,
  icon,
  passwordField = false,
  customProps,
}: props) {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={icon} size={24} />
        </View>

        <TextInput
          style={styles.input}
          onChangeText={handleChange(title)}
          value={values[title]}
          secureTextEntry={passwordField && !passwordVisibility}
          placeholder={placeholder}
          onBlur={() => {
            setFieldTouched(title);
          }}
          {...customProps}
        />
        {passwordField && (
          <View style={styles.passwordButton}>
            <TouchableOpacity
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            >
              <FontAwesomeIcon
                size={24}
                color="#000"
                // icon={faEye}
                icon={passwordVisibility ? faEye : faEyeSlash}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <FormError error={errors[title]} shown={!!touched[title]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginBottom: 10,
  },
  field: {
    marginTop: 5,
    width: "100%",
    height: 50,
    fontSize: 16,
    borderRadius: 8,
    borderColor: "#ccc",
    flexDirection: "row",
    borderWidth: 1,
    position: "relative",
  },
  iconWrapper: {
    width: 40,
    height: "100%",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingLeft: 5,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordButton: {
    position: "absolute",
    height: "100%",
    right: 10,
    top: 0,
    width: 25,
    justifyContent: "center",
  },
});
