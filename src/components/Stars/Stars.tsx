import React from "react";
import { View, StyleProp, ViewStyle, Image, ImageStyle } from "react-native";

import styles from "./Stars.style";

const TOTAL_STARS = 5;

const Stars = ({ value, testID, containerStyle, iconStyle }: StarsProps) => {
  const { container, empty, filled, icon } = styles;

  return (
    <View style={[container, containerStyle]} testID={testID}>
      {Array.from(Array(TOTAL_STARS)).map((_, index) => {
        return (
          <Image
            source={require("../../../assets/icons/star.png")}
            key={index}
            style={[icon, iconStyle, index + 1 <= value ? filled : empty]}
          />
        );
      })}
    </View>
  );
};

export interface StarsProps {
  value: number;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export default Stars;
