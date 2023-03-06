import { StyleSheet } from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginTop: 16,
  },
  infoDetails: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  contactView: {
    paddingBottom: 80,
  },
  customFlippedIcon: {
    transform: [{ scaleX: -1 }],
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.secondary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
  },
  bottomText: {
    textAlign: 'center',
    color: theme.colors.neutral_light,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
