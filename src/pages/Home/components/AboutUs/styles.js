import { StyleSheet } from "react-native";

export const createStyles = (styleguide) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: styleguide.colors.backgroundSecondary,
      alignItems: "center",
    },

    contentContainer: {
      width: "100%",
      paddingHorizontal: 20,
      maxWidth: styleguide.maxWidth,
    },

    textAbout: {
      fontFamily: "Medium",
      fontSize: 42,
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
      paddingTop: 64,
    
    },

    textDescription: {
      fontFamily: "Regular",
      fontSize: 18,
      lineHeight: 30,
    },

    textTeam: {
      fontFamily: 'RegularItalic',
      fontSize: 24,
      alignSelf: 'center',
      marginBottom: 265/2 + 80,
    }
  });
