import { StyleSheet } from "react-native";
import colors from './Colors.js';
import { customFonts } from "./Colors.js";

const fontNames = {
  regular: 'UncutSansRegular',
  bold: 'Uncut-Sans-Bold',
  medium: 'Uncut-Sans-Medium',
};


customFonts();


const styles = StyleSheet.create({
  ConfirmButton:
  {
      marginTop: '10%',
      marginLeft: '22%',
  },
  BookingInfoLine:
  {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '5%'
  },
  Title:
  {
      alignItems: 'center',
      backgroundColor: colors.black,
      height: 79,
  },
  TextTitle:
  {
      fontSize: 30,
      marginTop: '5%',
      color: colors.white,
      fontFamily: fontNames.bold,
  },
  ticket:
  {
      marginTop: '40%',
      marginLeft: '4%',
      transform: [{ rotate: '90deg' }]

  },
  TicketView:
  {
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',

  },
  BookingInfo:
  {
      position: 'absolute',
      top: 70,
      justifyContent: 'center',
      alignItems: 'right',
  },
  BookingText:
  {
      marginLeft: '5%',
      color: colors.white,
      fontSize: 20,
      fontFamily: fontNames.bold,
  },
  BookingTextInfo:
  {
      marginLeft: '5%',
      color: colors.white,
      fontSize: 20,
      fontFamily: fontNames.medium,
  },

});

export default styles;