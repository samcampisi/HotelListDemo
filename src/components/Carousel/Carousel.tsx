import React, { useRef, useState } from 'react';
import {
  View,
  StyleProp,
  ImageStyle,
  ViewStyle,
  ImageResizeMode,
} from 'react-native';
import PagerView, { PagerViewOnPageScrollEvent } from 'react-native-pager-view';
import HotelImage from 'components/HotelImage';

import styles from './Carousel.style';

const Carousel = ({
  gallery,
  testID,
  imageStyle,
  indicatorsStyle,
}: CarouselProps) => {
  const [indexPage, setIndexPage] = useState(0);

  const viewPagerRef = useRef<PagerView>(null);

  const RenderIndicators = (id?: number) => {
    return (
      <View
        key={id}
        style={[styles.dot, id === indexPage ? styles.activeDot : null]}
        testID={`${testID}-dot-${id}`}
      />
    );
  };

  return (
    <View testID={testID} style={styles.container}>
      {gallery.length > 1 && (
        <View
          style={[styles.indicatorsContainer, indicatorsStyle]}
          testID={`${testID}-dots`}>
          {gallery.map((_, index: number) => {
            return RenderIndicators(index);
          })}
        </View>
      )}

      <PagerView
        ref={viewPagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        showPageIndicator={false}
        overdrag={true}
        onPageScroll={(event: PagerViewOnPageScrollEvent) => {
          setIndexPage(event?.nativeEvent?.position);
        }}>
        {gallery.map((item: string, index: number) => {
          return (
            <View key={index} testID={`${testID}-item-${index}`}>
              <HotelImage url={item} imageStyle={[styles.image, imageStyle]} />
            </View>
          );
        })}
      </PagerView>
    </View>
  );
};

export interface CarouselProps {
  gallery: string[];
  testID?: string;
  imageStyle?: StyleProp<ImageStyle>;
  imageResize?: ImageResizeMode;
  indicatorsStyle?: StyleProp<ViewStyle>;
}

export default Carousel;
