import {StyleSheet} from 'react-native';


export const createStyles = (styleGuide) => StyleSheet.create ({
 container: {
   width: '100%',
   height: 70,
   padding:10,
   alignItems:'center',
   justifyContent:'space-around',
   backgroundColor: styleGuide.colors.backgroundThird,
   position:'relative',
   left:0,
   bottom:0,
   right:0,
 },

 contentContainer: {
    width: '100%',
    height: '100%',
    maxWidth: 1300,
    justifyContent: 'space-between',
    flexDirection: 'row',
 },

 viewSocialMedia: {
   height: 60,
   width:190,
   flexDirection: 'row',
   paddingLeft: 20,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },

 buttonSocialMedia: {
   marginLeft: 20,
 },

 caixaTextoFooter:{
  width:190,
  paddingHorizontal: 10,
  flexDirection: 'row',
  alignItems:'center',
 },
 
 textButton: {
  fontFamily: 'Regular',
  marginRight: 50,
  fontSize: 12,
  color: styleGuide.colors.fontPrimary
 },

})