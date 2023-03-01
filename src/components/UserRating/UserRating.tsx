import React from "react";
import { View, StyleProp, ViewStyle, Text } from "react-native";

import styles from "./UserRating.style";

const TOP_RATING = 10;

const UserRating = ({ rating, testID, containerStyle }: UserRatingProps) => {
  const {
    container,
    label,
    ratingContainer,
    ratingText,
    highRating,
    mediumRating,
    lowRating,
  } = styles;

  const getBackgroundColor = () => {
    if (rating >= TOP_RATING * 0.75) {
      return highRating;
    } else if (rating >= TOP_RATING * 0.5) {
      return mediumRating;
    } else {
      return lowRating;
    }
  };

  return (
    <View style={[container, containerStyle]} testID={testID}>
      <Text style={label}>User rating: </Text>
      <View style={[ratingContainer, getBackgroundColor()]}>
        <Text style={ratingText}>{String(rating)}</Text>
      </View>
    </View>
  );
};

export interface UserRatingProps {
  rating: number;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default UserRating;
