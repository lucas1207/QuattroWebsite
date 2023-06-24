import { StyleSheet } from "react-native";

export const createStyles = (styleGuide) => StyleSheet.create ({
  container:{
    width: '100%',
    height: 900,
    alignItems: 'center',
    backgroundColor: styleGuide.colors.backgroundSecondary
  },

  textTitle:{
    paddingTop: 100,
    color: "#333",
    fontFamily: 'Medium',
    fontSize: 32,
  },
})