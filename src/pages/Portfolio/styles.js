import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      backgroundColor: styleGuide.colors.backgroundPrimary,
      paddingTop: 100,
    },

    textTitle: {
      fontFamily: "Medium",
      fontSize: 50,
      color: "#333333",

      marginLeft: 50,
    },
  });
