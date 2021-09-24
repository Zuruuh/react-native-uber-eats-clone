import { useFormikContext } from "formik";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "react-native-bouncy-checkbox";
import palette from "styles/palette";
import { useDarkMode } from "react-native-dynamic";

interface props {
  label: string;
  title: string;
  isChecked?: boolean;
  color?: string;
}

export default function FormCheckbox({
  label,
  title,
  isChecked = false,
  color = palette.primary,
}: props) {
  const [checked, setChecked] = React.useState(true);
  const { handleChange, setFieldValue } = useFormikContext();
  const darkMode = useDarkMode();
  return (
    <View style={styles.container}>
      <Checkbox
        size={24}
        onPress={() => {
          setChecked(!checked);
          setFieldValue(title, checked, false);
          handleChange(title);
        }}
        isChecked={isChecked}
        fillColor={color}
        style={styles.checkbox}
      />
      <Text
        style={[
          styles.label,
          { color: darkMode ? palette.lightPrimary : palette.darkPrimary },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  label: {
    marginLeft: -6,
  },
});
