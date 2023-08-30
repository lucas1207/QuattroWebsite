import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    textAbout: {
      fontFamily: "Medium",
      fontSize: 36,
    },

    viewLine: {
      height: 3,
      width: 165,
      borderRadius: 10,
      marginLeft: 2,
      backgroundColor: styleguide.colors.quattroRed,
    },

    viewText: {
      flex: 1,
    },

    textDescription: {
      fontFamily: "Regular",
      fontSize: 18,
      lineHeight: 30,
    },
  });
