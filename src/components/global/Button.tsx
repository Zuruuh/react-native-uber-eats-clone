import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonStyle from "components/global/styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useDarkMode } from "react-native-dynamic";
import palette from "styles/palette";

export interface props {
  text: string;
  onPress?: Function;
  background?: string;
  color?: string;
  icon?: IconProp | null;
  disabled?: boolean;
  iconSize?: number | null;
}

export default function Button({
  text,
  onPress,
  background = palette.primary,
  color = palette.textPrimary,
  icon,
  disabled = false,
  iconSize,
}: props) {
  const darkMode = useDarkMode();
  return (
    <TouchableOpacity
      style={[
        { backgroundColor: background ?? palette.primary },
        ButtonStyle.button,
      ]}
      onPress={(e) => onPress(e)}
      disabled={disabled}
    >
      <View style={ButtonStyle.iconWrapper}>
        {icon && (
          <FontAwesomeIcon icon={icon} color={color} size={iconSize ?? 24} />
        )}
      </View>
      <Text style={[{ color }, ButtonStyle.text]}>{text}</Text>
    </TouchableOpacity>
  );
}
