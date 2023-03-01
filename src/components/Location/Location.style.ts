import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    marginBottom: 16,
    color: theme.colors.main,
  },
  mapView: {
    width: "100%",
    height: 240,
  },
});
