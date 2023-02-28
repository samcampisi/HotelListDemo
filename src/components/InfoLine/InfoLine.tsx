import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";

import styles from "./InfoLine.style";

const InfoLine = ({ icon, label, testID, containerStyle }: InfoLineProps) => {
  const { container, image, text } = styles;

  return (
    <View style={[container, containerStyle]} testID={testID}>
      <Image source={icon} style={image} />
      <Text style={text}>{label}</Text>
    </View>
  );
};

export interface InfoLineProps {
  icon: ImageSourcePropType;
  label: string;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default InfoLine;
