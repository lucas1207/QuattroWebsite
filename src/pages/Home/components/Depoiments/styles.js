import { StyleSheet } from "react-native";

export const createStyles = (styleGuide, opacity) =>
  StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
    },

    backgroundImage: {
      height: "100%",
      width: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      resizeMode: "cover",
    },

    viewFilter: {
      height: "100%",
      width: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: "#003941",
      opacity: 0.85,
    },

    viewContent: {
      zIndex: 3,
      maxWidth: styleGuide.maxWidth,
      width: "100%",

      paddingHorizontal: 20,
      alignSelf: "center",
      alignItems: "center",
    },

    textTitle: {
      color: "white",
      fontFamily: "Medium",
      fontSize: 30,

      marginBottom: 100,
    },
    textSubtitle: {
      color: "white",
      fontFamily: "Medium",
      fontSize: 18,
      marginBottom: 90,
    },

    textDepoiments: {
      fontFamily: "Regular",
      fontSize: 24,
      lineHeight: 45,
      opacity,
      paddingHorizontal: 80,
      color: "white",
      minHeight: 150,
      marginBottom: 80,
    },

    textAuthor: {
      fontFamily: "Regular",
      fontSize: 18,
      color: "white",
      opacity,
      marginBottom: 10,
      alignSelf: "flex-start",
    },
    textOcupation: {
      fontFamily: "Regular",
      fontSize: 18,
      color: "white",
      opacity,
      marginBottom: 30,
      alignSelf: "flex-start",
    },

    viewBalls: {
      alignSelf: "flex-start",
      flexDirection: "row",
      gap: 10,
    },

    ball: {
      height: 12,
      width: 12,
      backgroundColor: styleGuide.colors.backgroundPrimary,
      borderRadius: 10,
    },

    imageTriangle: {
      width: "100%",
      zIndex: 3,
    },

    viewArrow: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonArrow: {
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
    },
  });
