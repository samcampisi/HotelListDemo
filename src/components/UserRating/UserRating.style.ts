import { StyleSheet } from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.main,
  },
  ratingContainer: {
    backgroundColor: theme.colors.main,
    padding: 6,
    borderRadius: 4,
  },
  highRating: {
    backgroundColor: theme.colors.green,
  },
  mediumRating: {
    backgroundColor: theme.colors.yellow,
  },
  lowRating: {
    backgroundColor: theme.colors.red,
  },
  ratingText: {
    color: theme.colors.neutral_light,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
