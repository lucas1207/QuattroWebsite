import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      width: "100%",

      alignItems: "center",
      backgroundColor: styleGuide.colors.backgroundSecondary,
    },

    textTitle: {
      paddingTop: 100,
      color: "#333",
      fontFamily: "Medium",
      fontSize: 32,
    },

    viewButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonArrow: {
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
