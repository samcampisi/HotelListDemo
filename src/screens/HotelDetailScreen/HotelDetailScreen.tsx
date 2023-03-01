import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import InfoLine from "../../components/InfoLine";
import Stars from "../../components/Stars";

const HotelDetailScreen = ({ route }) => {
  const {
    gallery,
    name,
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
    <View testID={"HotelDetailScreen"}>
      <Text>{name}</Text>
      <Stars value={stars} />
      <InfoLine
        label={`${location.address}, ${location.city}`}
        icon={require("../../../assets/icons/location.png")}
      />
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
      <MapView
        style={{ width: "100%", height: 250 }}
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
          pinColor="red"
        />
      </MapView>
    </View>
  );
};

export default HotelDetailScreen;
