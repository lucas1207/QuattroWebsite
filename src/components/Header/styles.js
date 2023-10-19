import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 60,
      position: "fixed",
      top: 0,
      backgroundColor: styleGuide.colors.backgroundPrimary,
      shadowColor: "#000000",
      shadowOpacity: 0.25,
      alignItems: "center",
      zIndex: 10,

      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },

    contentContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      maxWidth: styleGuide.maxWidth,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      flexDirection: "row",
    },

    buttonQuattro: {
      height: 50,
      width: 190,
    },

    logoQuattro: {
      height: "100%",
      width: "100%",
      resizeMode: "contain",
    },

    viewLinks: {
      flexDirection: "row",
      gap: 50,
    },

    textButton: {
      fontFamily: "Medium",

      fontSize: 16,
      color: styleGuide.colors.fontPrimary,
    },

    viewSocialMedia: {
      height: 60,
      width: 190,
      flexDirection: "row",
      paddingLeft: 20,
      justifyContent: "flex-end",
      alignItems: "center",
    },

    buttonSocialMedia: {
      marginLeft: 20,
    },
  });
