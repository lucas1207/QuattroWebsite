import {StyleSheet} from 'react-native';


export const createStyles = (styleGuide) => StyleSheet.create ({
 container: {
   width: '100%',
   height: 80,
   padding:10,
   flexDirection:'row',
   alignItems:'center',
   justifyContent: 'space-evenly',
   backgroundColor: styleGuide.colors.backgroundThird,
 },
 containerLogo:{
  height: 50,
  width: 190,
 },
 logoQuattro:{
  height: '100%',
  width: '100%',
  resizeMode: 'contain'
 },
 arrowUp:{
  height: '100%',
  width: '100%',
  resizeMode: 'contain'
 },
 textFooter:{
  fontFamily:'Regular',
  fontSize: 12,
  color: styleGuide.colors.fontPrimary,
  marginBottom:2,
 },
 buttonTopo:{
  width:90,
  height:60,
  borderRadius:15,
  backgroundColor:styleGuide.colors.quattroLightBlue,
  justifyContent: 'center',
  alignItems:'center',
  textAlign:'center',
 },
 textButtonTopo:{
  fontFamily:'Medium',
  fontSize: 14,
  color: '#fff',
 },
 arrow:{
  height:70
 },

 //mobile
 containerMobile:{
  width: '100%',
  flexDirection:'column',
  alignItems:'center',
  textAlign:'center',
  alignContent:'center',
  padding:10,
  backgroundColor: styleGuide.colors.backgroundThird,
 },
 boxMobile:{
  marginVertical:10
 }

})