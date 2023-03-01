import React from "react";
import { View, Text, ScrollView } from "react-native";
import Carousel from "../../components/Carousel";
import InfoLine from "../../components/InfoLine";
import Location from "../../components/Location";
import Stars from "../../components/Stars";
import { CURRENCY_SYMBOLS } from "../../constants/currencies";
import styles from "./HotelDetailScreen.style";

const HotelDetailScreen = ({ route }) => {
  const {
    container,
    section,
    bottom,
    bottomText,
    infoDetails,
    contactView,
    customFlippedIcon,
  } = styles;

  const {
    gallery,
    currency,
    price,
    location,
    stars,
    userRating,
    checkIn,
    checkOut,
    contact,
  } = route.params;

  return (
    <View style={container}>
      <ScrollView testID={"HotelDetailScreen"}>
        <Carousel gallery={gallery} />
        <View style={[section, infoDetails]}>
          <Stars value={stars} />
          <InfoLine
            label={`User rating: ${userRating}`}
            icon={require("../../../assets/icons/rating.png")}
          />
          <InfoLine
            label={`Check-in: ${checkIn.from}-${checkIn.to}`}
            icon={require("../../../assets/icons/clock.png")}
            iconStyle={customFlippedIcon}
          />
          <InfoLine
            label={`Check-out: ${checkOut.from}-${checkOut.to}`}
            icon={require("../../../assets/icons/clock.png")}
          />
        </View>
        <View style={section}>
          <Location location={location} />
        </View>
        <View style={[section, infoDetails, contactView]}>
          <InfoLine
            label={contact.phoneNumber}
            icon={require("../../../assets/icons/phone.png")}
          />
          <InfoLine
            label={contact.email}
            icon={require("../../../assets/icons/mail.png")}
          />
        </View>
      </ScrollView>
      <View style={bottom}>
        <Text style={bottomText}>
          {CURRENCY_SYMBOLS[currency] || currency}
          {price}
        </Text>
      </View>
    </View>
  );
};

export default HotelDetailScreen;
