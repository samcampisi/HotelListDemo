import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Carousel from "../../components/Carousel";
import InfoLine from "../../components/InfoLine";
import Stars from "../../components/Stars";
import theme from "../../theme/theme";
import { CURRENCY_SYMBOLS } from "../../constants/currencies";
import styles from "./HotelDetailScreen.style";

const HotelDetailScreen = ({ route }) => {
  const {
    container,
    section,
    mapView,
    bottom,
    bottomText,
    infoDetails,
    contactView,
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
            label={String(userRating)}
            icon={require("../../../assets/icons/rating.png")}
          />
          <InfoLine
            label={"Check-in / Check-out"}
            icon={require("../../../assets/icons/clock.png")}
          />
          <InfoLine
            label={`${checkIn.from}-${checkIn.to} / ${checkOut.from}-${checkOut.to}`}
            icon={require("../../../assets/icons/clock.png")}
          />
        </View>
        <View style={section}>
          <InfoLine
            label={`${location.address}, ${location.city}`}
            icon={require("../../../assets/icons/location.png")}
          />
          <MapView
            style={mapView}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              pinColor={theme.colors.accent}
            />
          </MapView>
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
