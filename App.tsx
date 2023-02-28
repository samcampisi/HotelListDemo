import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HotelDetailScreen from "./src/screens/HotelDetailScreen";
import SCREEN_NAMES from "./src/constants/screenNames";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME_SCREEN}>
        <Stack.Screen
          name={SCREEN_NAMES.HOME_SCREEN}
          component={HomeScreen}
          options={{ title: "Hotel List" }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.HOTEL_DETAIL_SCREEN}
          component={HotelDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
