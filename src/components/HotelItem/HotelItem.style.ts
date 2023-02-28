import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
  cardContainer: {
    height: 200,
    backgroundColor: theme.colors.neutral_light,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: theme.colors.main,
    marginBottom: 16,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  horizontal: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
  },
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
  infoArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "bold",
    color: theme.colors.main,
  },
  pricetag: {
    backgroundColor: theme.colors.accent,
    padding: 8,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  pricetagText: {
    color: theme.colors.neutral_light,
    fontWeight: "bold",
  },
});
