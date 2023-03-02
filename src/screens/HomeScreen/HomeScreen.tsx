import React, { useEffect, useCallback, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from "react-native";
import ErrorMessage from "../../components/ErrorMessage";
import HotelItem from "../../components/HotelItem";
import { Hotel } from "../../interfaces/Hotel/Hotel";
import SCREEN_NAMES from "../../constants/screenNames";
import styles from "./HomeScreen.style";
import { HotelsContext } from "../../contexts/HotelsContext";
import useFetchHotels from "../../hooks/useFetchHotels";
import { SORT_OPTIONS } from "../../constants/sortOptions";
import { DEFAULT, LOW } from "../../constants/sortKeys";

const HomeScreen = ({ navigation }) => {
  const {
    container,
    loaderContainer,
    headerText,
    emptyComponentIcon,
    emptyComponentContainer,
  } = styles;

  const {
    isLoading,
    error,
    hotels,
    sortOptions,
    selectedSort,
    setSelectedSort,
  } = useContext(HotelsContext);

  const onHotelPress = (hotel: Hotel) =>
    navigation.navigate(SCREEN_NAMES.HOTEL_DETAIL_SCREEN, hotel);

  const { fetchHotels } = useFetchHotels();

  useEffect(() => {
    fetchHotels();
  }, []);

  const renderHeader = () => {
    const total = hotels?.length;
    return !isLoading && total ? (
      <Text style={headerText}>{total} hotels found</Text>
    ) : null;
  };

  const renderEmptyComponent = () => {
    return !isLoading ? (
      <View>
        <Image
          source={require("../../../assets/icons/search.png")}
          style={emptyComponentIcon}
        />
        <Text>No hotels were found</Text>
      </View>
    ) : null;
  };

  const renderItem: ListRenderItem<Hotel> = ({ item }) => {
    return <HotelItem hotel={item} onPress={onHotelPress} />;
  };

  const keyExtractor = ({ id }: Hotel) => `${id}`;

  const sorted =
    selectedSort.id === DEFAULT
      ? hotels
      : [...hotels].sort((a: Hotel, b: Hotel) => {
          if (selectedSort.order === LOW) {
            return a[selectedSort.id] - b[selectedSort.id];
          } else {
            return b[selectedSort.id] - a[selectedSort.id];
          }
        });

  return (
    <View testID={"HomeScreen"} style={container}>
      {isLoading && (
        <View style={loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {error && (
        <ErrorMessage
          onRetryPress={() => {
            fetchHotels();
          }}
        />
      )}
      {sortOptions.map((sortOption, index) => {
        return (
          <View key={`${sortOption.id}-${index}`}>
            <TouchableOpacity
              onPress={() => {
                setSelectedSort(sortOption);
              }}
            >
              <Text>
                {SORT_OPTIONS[sortOption.id]} {sortOption.order}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <FlatList
        data={sorted}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          hotels.length ? undefined : emptyComponentContainer
        }
      />
    </View>
  );
};

export interface HomeScreenProps {}

export default HomeScreen;
