import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  defaultImage: {
    tintColor: theme.colors.neutral_grey,
    maxWidth: "100%",
    resizeMode: "center",
  },
});
