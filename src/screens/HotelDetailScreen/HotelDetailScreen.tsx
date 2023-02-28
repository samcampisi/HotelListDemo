import React from "react";
import { View, Text } from "react-native";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View testID={"HomeScreen"}>
      <Text>Hotel Detail Screen</Text>
    </View>
  );
};

export interface HomeScreenProps {}

export default HomeScreen;
