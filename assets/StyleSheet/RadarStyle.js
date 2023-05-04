import { StyleSheet } from "react-native";
import colors from './Colors.js';
import { customFonts } from "./Colors.js";
import { Dimensions } from "react-native";


customFonts();

const fontNames = {
  regular: 'UncutSansRegular',
  bold: 'Uncut-Sans-Bold',
  medium: 'Uncut-Sans-Medium',
};


const styles = StyleSheet.create({
  button:
  {
    marginLeft: '10%',
    marginTop: '10%',
    backgroundColor: colors.secondary,
    borderRadius: 30, 
    borderWidth: 3,
    width: 250,
  },
  map:
  {
    width: 250,
    height: 150, 
    borderRadius: 20, 
    borderWidth: 2,
    marginBottom: '15%',
  },
  HeaderStyle:
  {
    backgroundColor: colors.black,
    height: 79,
  },
  HeaderTextStyle:
  {
    marginTop: 20,
    color: 'white',
    fontSize: 24,
    fontFamily: fontNames.bold,
    textAlign: 'center',
  },
  SearchBar:
  {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    marginLeft: '10%',
    marginRight: '10%',

  },
  SearchBarMap:{
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  SearchBarText:
  {
    color: colors.white,
    fontFamily: fontNames.medium,
    fontSize: 18,
    marginBottom: '5%',
  },
  ImageStyle:
  {
    height: Dimensions.get('window').height-79,
  },
  InfoView:
  {
    padding: 40,
    opacity: 0.95,
    marginTop: '10%',
    backgroundColor: colors.white,
    height: 450,
    borderRadius: 30,

  },
  InfoTitleText:
  {
    color: colors.black,
    fontFamily: fontNames.bold,
    fontSize: 24,
    textAlign: 'center',
  },
  InfoText:
  {
    marginLeft: '5%',
    color: colors.black,
    fontFamily: fontNames.medium,
    fontSize: 18,
  }


});

export default styles;