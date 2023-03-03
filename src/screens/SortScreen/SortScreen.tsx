import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { HotelsContext } from "../../contexts/HotelsContext";

import styles from "./SortScreen.style";
import { formatSort } from "../../utils/sort/formatSort";

const SortScreen = ({ testID, navigation }: SortScreenProps) => {
  const { container, optionContainer, text, indicator } = styles;

  const { sortOptions, setSelectedSort, selectedSort } =
    useContext(HotelsContext);

  return (
    <View style={container} testID={testID}>
      {sortOptions.map((sortOption, index) => {
        return (
          <Pressable
            testID={`${testID}-option-${index}`}
            key={`${sortOption.id}-${index}`}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
              optionContainer,
            ]}
            onPress={() => {
              setSelectedSort(sortOption);
              navigation.goBack();
            }}
          >
            <Text style={text}>{formatSort(sortOption)}</Text>

            {selectedSort.id === sortOption.id &&
              selectedSort.order === sortOption.order && (
                <View style={indicator} />
              )}
          </Pressable>
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
