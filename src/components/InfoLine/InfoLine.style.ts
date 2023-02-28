import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    color: theme.colors.main,
    flex: 1,
    fontSize: 12,
  },
});
