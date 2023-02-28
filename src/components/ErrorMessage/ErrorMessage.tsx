import React from "react";
import { View, StyleProp, ViewStyle, Text, Pressable } from "react-native";

import styles from "./ErrorMessage.style";

const ErrorMessage = ({
  text,
  onRetryPress,
  testID,
  containerStyle,
}: ErrorMessageProps) => {
  const { container, textStyle, retryText } = styles;

  return (
    <View style={[container, containerStyle]} testID={testID}>
      <Text style={textStyle}>
        {text || "Sorry! There was an error getting this content"}
      </Text>
      <Pressable
        testID={testID}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.2 : 1,
          },
        ]}
        onPress={() => {
          if (onRetryPress) {
            onRetryPress();
          }
        }}
      >
        <Text style={retryText}>Retry</Text>
      </Pressable>
    </View>
  );
};

export interface ErrorMessageProps {
  text?: string;
  onRetryPress?: () => void;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default ErrorMessage;
