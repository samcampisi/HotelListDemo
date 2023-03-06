import React from 'react';
import { StyleProp, ViewStyle, TextInput } from 'react-native';

import styles from './Searchbar.style';

const Searchbar = ({
  onTextChange,
  value,
  testID,
  containerStyle,
}: SearchbarProps) => {
  const { input } = styles;

  return (
    <TextInput
      value={value}
      onChangeText={(text: string) => {
        onTextChange(text);
      }}
      style={[input, containerStyle]}
      testID={testID}
      autoFocus={false}
      placeholder="Search for hotels..."
    />
  );
};

export interface SearchbarProps {
  onTextChange: (text: string) => void;
  value: string;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default Searchbar;
