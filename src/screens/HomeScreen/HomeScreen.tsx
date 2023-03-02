import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Image,
  Pressable,
} from "react-native";
import ErrorMessage from "../../components/ErrorMessage";
import HotelItem from "../../components/HotelItem";
import { Hotel } from "../../interfaces/Hotel/Hotel";
import SCREEN_NAMES from "../../constants/screenNames";
import styles from "./HomeScreen.style";
import { HotelsContext } from "../../contexts/HotelsContext";
import useFetchHotels from "../../hooks/useFetchHotels";
import { sortHotels } from "../../utils/sort/sortHotels";
import { SORT_OPTIONS } from "../../constants/sortOptions";
import { DEFAULT } from "../../constants/sortKeys";

const HomeScreen = ({ navigation }) => {
  const {
    container,
    loaderContainer,
    headerText,
    emptyComponentIcon,
    emptyComponentContainer,
  } = styles;

  const { isLoading, error, hotels, selectedSort } = useContext(HotelsContext);

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

  const sorted = sortHotels(selectedSort, hotels);

  return (
    <View testID={"HomeScreen"} style={container}>
      <Pressable
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.SORT_SCREEN);
        }}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.2 : 1,
          },
        ]}
      >
        <Text>Sort</Text>
        {selectedSort.id !== DEFAULT && (
          <Text>
            {`(${SORT_OPTIONS[selectedSort.id] || selectedSort.id} - ${
              selectedSort.order
            })`}
          </Text>
        )}
      </Pressable>
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
