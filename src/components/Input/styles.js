import { StyleSheet } from "react-native";

export const createStyles = (styleGuide, multiline) => StyleSheet.create ({
  container:{
    width:'100%',
    alignItems: 'center',
    paddingHorizontal: 32

  },

  input:{
    width:'100%',
    borderColor: '#8b8b8b',
    borderWidth: 2,
    borderRadius: 5,
    outlineStyle: 'none',
    height: multiline ? 300 : 50,
    paddingHorizontal:10,
  },

  textInput:{
    alignSelf: 'flex-start',
    padding: 5
  }
})