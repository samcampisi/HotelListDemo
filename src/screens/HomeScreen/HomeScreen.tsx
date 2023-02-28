import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View testID={"HomeScreen"}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detail screen"
        onPress={() => {
          navigation.navigate("HotelDetail");
        }}
      />
    </View>
  );
};

export interface HomeScreenProps {}

export default HomeScreen;
