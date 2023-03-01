import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  container: {
    minHeight: 280,
    backgroundColor: theme.colors.neutral_light,
  },
  image: {
    width: "100%",
    height: 320,
  },
  indicatorsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    bottom: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 4,
    backgroundColor: theme.colors.background,
  },
  activeDot: {
    backgroundColor: theme.colors.accent,
  },
});
