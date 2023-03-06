import React from "react";
import { View, StyleProp, ViewStyle, Text, Pressable } from "react-native";

import styles from "./TopButton.style";

const TopButton = ({
  title,
  subtitle,
  onPress,
  testID,
  containerStyle,
}: TopButtonProps) => {
  const { container, textContainer, text } = styles;

  return (
    <View style={[container, containerStyle]} testID={testID}>
      <Pressable
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
        style={({ pressed }) => [
          {
            opacity: onPress && pressed ? 0.2 : 1,
          },
          textContainer,
        ]}
      >
        <Text style={text}>{title}</Text>
        {subtitle && <Text>{subtitle}</Text>}
      </Pressable>
    </View>
  );
};

export interface TopButtonProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default TopButton;
