import { StyleSheet } from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
    color: theme.colors.error,
  },
  retryText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.main,
  },
});
