import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonStyle from "components/global/styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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
  background = "#000",
  color = "#fff",
  icon = null,
  disabled = false,
  iconSize = null,
}: props) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: background }, ButtonStyle.button]}
      onPress={(e) => onPress(e)}
      disabled={disabled}
    >
      <View style={ButtonStyle.iconWrapper}>
        {!!icon && (
          <FontAwesomeIcon icon={icon} color={color} size={iconSize ?? 24} />
        )}
      </View>
      <Text style={[{ color }, ButtonStyle.text]}>{text}</Text>
    </TouchableOpacity>
  );
}
