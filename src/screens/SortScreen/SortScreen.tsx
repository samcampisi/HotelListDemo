import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SORT_OPTIONS } from "../../constants/sortOptions";
import { HotelsContext } from "../../contexts/HotelsContext";

import styles from "./SortScreen.style";

const SortScreen = ({ testID, navigation }: SortScreenProps) => {
  const { container } = styles;

  const { sortOptions, setSelectedSort } = useContext(HotelsContext);

  return (
    <View style={container} testID={testID}>
      {sortOptions.map((sortOption, index) => {
        return (
          <View key={`${sortOption.id}-${index}`}>
            <Pressable
              testID={`${testID}-option-${index}`}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
              onPress={() => {
                setSelectedSort(sortOption);
                navigation.goBack();
              }}
            >
              <Text>
                {SORT_OPTIONS[sortOption.id] || sortOption.id}{" "}
                {sortOption.order}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export interface SortScreenProps {
  testID?: string;
  navigation: NavigationProp<any, any>;
}

export default SortScreen;
