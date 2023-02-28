import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
} from "react-native";
import { Hotel } from "../../interfaces/Hotel/Hotel";

import styles from "./HotelItem.style";

const HotelItem = ({
  hotel,
  onPress,
  testID,
  containerStyle,
}: HotelItemProps) => {
  const { cardContainer, imageContainer, image, infoArea, title } = styles;

  return (
    <View style={[cardContainer, containerStyle]}>
      <Pressable
        testID={testID}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.2 : 1,
            flexDirection: "row",
          },
        ]}
        onPress={() => {
          if (onPress) {
            onPress(hotel);
          }
        }}
      >
        <View style={imageContainer}>
          <Image source={{ uri: hotel.gallery[0] }} style={image} />
        </View>
        <View style={infoArea}>
          <Text style={title} numberOfLines={2}>
            {hotel.name.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export interface HotelItemProps {
  hotel: Hotel;
  onPress?: (hotel: Hotel) => void;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default HotelItem;
