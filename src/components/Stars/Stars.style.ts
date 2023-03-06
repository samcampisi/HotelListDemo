import { StyleSheet } from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  empty: {
    tintColor: theme.colors.empty_grey,
  },
  filled: {
    tintColor: theme.colors.gold,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
