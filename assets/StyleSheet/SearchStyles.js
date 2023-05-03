import { StyleSheet } from "react-native";
import colors from './Colors.js';
import { customFonts } from "./Colors.js";


customFonts();

const fontNames = {
  regular: 'UncutSansRegular',
  bold: 'Uncut-Sans-Bold',
  medium: 'Uncut-Sans-Medium',
};


const styles = StyleSheet.create({
  HeaderStyle:
  {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#1F271B',
    width: '100%',
    height: 79,
  },
  HeaderTextStyle:
  {
    marginLeft: '30%',
    fontFamily: fontNames.bold,
    fontSize: 30,
    color: '#FFFFFF'
  },
  SearchFrom:
  {
    borderTopWidth: 10,
    borderColor: colors.primary,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 25,
    flex: 1,
    padding: '5%',
    marginTop: '8%',
    width: '80%',
    borderColor: colors.primary,
    borderRadius: '15%',
    marginLeft: '10%',
  },

  RadioView:
  {
    marginTop: '-8%',
    flexDirection: 'row',
    height: '10%',
  },
  IndevRadioView:
  {
    display: 'flex',
    flexDirection: 'row'
  },
  RadioText:
  {
    fontFamily: fontNames.medium,
    marginTop: '10%',
  },
  SearchButton:
  {
    marginTop: '10%',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.secondary,
    height: '10%',
    borderRadius: '30%',
  },
  SearchButtonText:
  {
    marginLeft: '25%',
    fontFamily: fontNames.medium,
    color: colors.white,
    fontSize: 20,
  },
  CalendarDates:
  {
    marginTop: '20%',
    height: '25%'
  },
  FlightInformation:
  {
    marginTop: '5%',
    height: '40%'
  },

});

export default styles;