import React from 'react';
import { View, StyleProp, ViewStyle, ImageStyle, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Location as ILocation } from 'interfaces/Hotel/Location';

import styles from './Location.style';
import theme from 'theme/theme';

const Location = ({ location, testID, containerStyle }: LocationProps) => {
  const { container, text, mapView } = styles;
  const { address, latitude, longitude } = location;

  return (
    <View style={[container, containerStyle]} testID={testID}>
      <Text style={text}>{address}</Text>
      <MapView
        style={mapView}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          pinColor={theme.colors.accent}
        />
      </MapView>
    </View>
  );
};

export interface LocationProps {
  location: ILocation;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export default Location;
