import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import HotelItem from "../../components/HotelItem";
import { Hotel } from "../../interfaces/Hotel/Hotel";
import styles from "./HomeScreen.style";

const HomeScreen = ({ navigation }) => {
  const {
    container,
    loaderContainer,
    headerText,
    emptyComponentIcon,
    emptyComponentContainer,
  } = styles;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hotels, setHotels] = useState(null);

  const getHotels = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await (
        await fetch(
          "https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507"
        )
      ).json();

      setHotels(res);
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [setHotels]);

  useEffect(() => {
    getHotels();
  }, []);

  const renderHeader = () => {
    const total = hotels?.length;
    return total ? <Text style={headerText}>{total} hotels found</Text> : null;
  };

  const renderEmptyComponent = () => {
    return (
      <View>
        <Image
          source={require("../../../assets/icons/search.png")}
          style={emptyComponentIcon}
        />
        <Text>No hotels were found</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<Hotel> = ({ item }) => {
    return <HotelItem hotel={item} />;
  };

  const keyExtractor = ({ id }: Hotel) => `${id}`;

  return (
    <View testID={"HomeScreen"} style={container}>
      {isLoading && (
        <View style={loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <FlatList
        data={hotels}
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
