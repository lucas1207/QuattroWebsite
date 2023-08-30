import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    viewHelp: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 100,
    },

    viewLine: {
      height: 3,
      flex: 1,
      backgroundColor: styleguide.colors.quattroYellow,
    },

    textHelp: {
      fontSize: 22,
      fontFamily: "MediumItalic",
      marginLeft: 40,
    },

    textHelpBold: {
      fontSize: 22,
      fontFamily: "BoldItalic",
      marginRight: 40,
    },

    viewInfo: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },

    itemInfo: {
      alignItems: "center",
      width: 350,
      alignItems: "center",
    },

    textInfoBold: {
      fontFamily: "SemiBold",
      fontSize: 32,
      marginBottom: 40,
      textAlign: "center",
    },

    textInfo: {
      fontFamily: "Medium",
      fontSize: 22,
      textAlign: "center",
    },
  });
