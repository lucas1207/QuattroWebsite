import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) =>
  StyleSheet.create({
    container: {
      width: 230,
      height: 130,
      borderRadius: 3,

      marginRight: 40,
      paddingLeft: 10,
      paddingTop: 10,
    },

    textTitle: {
      fontSize: 18,
      fontFamily: "Bold",
      color: "white",
      marginBottom: 10,
      zIndex: 2,
    },

    textDescription: {
      fontSize: 15,
      fontFamily: "Regular",
      color: "white",
      zIndex: 2,
    },

    imageFundo: {
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      resizeMode: "cover",
      borderRadius: 3,
      position: "absolute",
    },

    viewFilter: {
      top: 0,
      left: 0,
      borderRadius: 3,
      height: "100%",
      width: "100%",
      backgroundColor: "#00000060",
      position: "absolute",
    },
  });
