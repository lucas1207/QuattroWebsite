import { StyleSheet } from "react-native";

export const createStyles = (styleGuide, multiline) =>
  StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 32,
      marginTop: 15,
    },

    input: {
      width: "100%",
      borderWidth: 2,
      paddingLeft: 20,
      fontFamily: "Regular",
      borderRadius: 5,
      outlineStyle: "none",
      height: multiline ? 300 : 50,
      paddingTop: multiline ? 10 : 0,
    },

    textInput: {
      alignSelf: "flex-start",
      padding: 1,
      fontFamily: "Regular",
    },

    textError: {
      color: styleGuide.colors.quattroRed,
      alignSelf: "flex-start",
      fontFamily: "Regular",
      paddingLeft: 10,
    },
  });
