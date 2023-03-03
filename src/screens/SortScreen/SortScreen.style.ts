import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral_light,
  },
  optionContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
    marginHorizontal: 8,
  },
});
