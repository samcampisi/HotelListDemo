import React from "react";
import { View, Text, StyleProp, ViewStyle, Pressable } from "react-native";
import { CURRENCY_SYMBOLS } from "../../constants/currencies";
import { Hotel } from "../../interfaces/Hotel/Hotel";
import HotelImage from "../HotelImage";
import InfoLine from "../InfoLine";
import Stars from "../Stars";

import styles from "./HotelItem.style";

const HotelItem = ({
  hotel,
  onPress,
  testID,
  containerStyle,
}: HotelItemProps) => {
  const {
    cardContainer,
    horizontal,
    imageContainer,
    infoArea,
    title,
    pricetag,
    pricetagText,
  } = styles;
  const { gallery, name, currency, price, location, stars, userRating } = hotel;

  return (
    <View style={[cardContainer, containerStyle]}>
      <Pressable
        testID={testID}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.2 : 1,
          },
          horizontal,
        ]}
        onPress={() => {
          if (onPress) {
            onPress(hotel);
          }
        }}
      >
        <View style={imageContainer}>
          <HotelImage url={gallery[0]} />
        </View>
        <View style={infoArea}>
          <Text style={title} numberOfLines={2}>
            {name.toUpperCase()}
          </Text>
          <View>
            <Stars value={stars} />
            <InfoLine
              label={`${location.address}, ${location.city}`}
              icon={require("../../../assets/icons/location.png")}
            />
            <InfoLine
              label={String(userRating)}
              icon={require("../../../assets/icons/rating.png")}
            />
          </View>
          <View style={pricetag}>
            <Text style={pricetagText}>
              {CURRENCY_SYMBOLS[currency] || currency}
              {price}
            </Text>
          </View>
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
