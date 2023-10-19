import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: 30,
      paddingLeft: 50,
      backgroundColor: styleGuide.colors.backgroundPrimary,
    },

    textTitle: {
      fontFamily: "Regular",
      fontSize: 20,
      marginRight: 25,
      color: "#333333",
    },

    viewTitle: {
      flexDirection: "row",

      alignItems: "center",
    },

    buttonArrow: {
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
