import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from "react-native";
import HotelItem from "../../components/HotelItem";
import { Hotel } from "../../interfaces/Hotel/Hotel";
import styles from "./HomeScreen.style";

const HomeScreen = ({ navigation }) => {
  const { container, loaderContainer, headerText } = styles;

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
    return <Text style={headerText}>{hotels?.length || "0"} hotels found</Text>;
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
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export interface HomeScreenProps {}

export default HomeScreen;
