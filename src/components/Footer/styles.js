import {StyleSheet} from 'react-native';


export const createStyles = (styleGuide) => StyleSheet.create ({
 container: {
   width: '100%',
   height: 70,
   padding:15,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-around',
   backgroundColor: styleGuide.colors.backgroundThird,
 },
 buttonQuattro:{
  height: 50,
  width: 190,
 },
 logoQuattro:{
  height: '100%',
  width: '100%',
  resizeMode: 'contain'
 },
 textFooter:{
  fontFamily:'Regular',
  fontSize: 12,
  color: styleGuide.colors.fontPrimary,
  marginBottom:2
 },
 buttonTopo:{
  width:90,
  height:50,
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
 }
})