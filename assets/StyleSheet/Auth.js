import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";

customFonts();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  SmallHeadingText: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
    color: colors.black,
    fontFamily: 'UncutSansRegular',
  },
  BigHeadingText: {
    marginLeft: 40,
    fontSize: 60,
    flex: 1,
    color: colors.black,
    fontFamily: 'Uncut-Sans-Bold',
  },
  GetStarted: {
    alignItems: 'center',
    height: 150,
    width: '100%',
    
  },
  Login: {
    marginTop: 15,
    width: '90%',
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,

  },
  LoginRegisterScreen: {
    backgroundColor: colors.white,
    marginTop: 40,
  },
  error:{
    color: 'red',
    fontFamily: 'UncutSansRegular',
  },
  Register:{
    width: '90%',
  },
});
