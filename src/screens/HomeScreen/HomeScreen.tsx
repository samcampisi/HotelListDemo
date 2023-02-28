import React, { useEffect, useCallback, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./HomeScreen.style";

const HomeScreen = ({ navigation }) => {
  const { container, loaderContainer } = styles;

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

  return (
    <View testID={"HomeScreen"} style={container}>
      {isLoading && (
        <View style={loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <Text>{JSON.stringify(hotels)}</Text>
    </View>
  );
};

export interface HomeScreenProps {}

export default HomeScreen;
