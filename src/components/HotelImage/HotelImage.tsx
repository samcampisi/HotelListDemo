import React, { useState } from 'react';
import { StyleProp, Image, ImageStyle } from 'react-native';

import styles from './HotelImage.style';

const HotelImage = ({ url, testID, imageStyle }: HotelImageProps) => {
  const { image, defaultImage } = styles;

  const [imageError, setImageError] = useState(false);

  return (
    <Image
      source={imageError ? require('assets/defaultHotel.png') : { uri: url }}
      style={[image, imageError && defaultImage, imageStyle]}
      onError={() => setImageError(true)}
      testID={testID}
    />
  );
};

export interface HotelImageProps {
  url: string;
  testID?: string;
  imageStyle?: StyleProp<ImageStyle>;
}

export default HotelImage;
