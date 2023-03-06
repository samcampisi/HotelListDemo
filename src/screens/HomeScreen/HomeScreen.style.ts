import { StyleSheet } from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: theme.colors.main,
    textAlign: 'center',
    marginVertical: 16,
  },
  emptyComponentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyComponentIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});
