import {StyleSheet} from 'react-native';


export const createStyles = (styleGuide) => StyleSheet.create ({
 container: {
   flex: 1,
    backgroundColor: styleGuide.colors.backgroundPrimary,
    paddingTop: 140,
    paddingBottom: 150,

    
 },

 textTitle: {
  fontFamily: 'Medium',
  fontSize: 50,
  color: '#333333',

 marginLeft: 50,
 
 }


})