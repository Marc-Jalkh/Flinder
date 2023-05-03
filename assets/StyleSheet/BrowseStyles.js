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
        alignItems: 'center',
        padding: '2%',
        backgroundColor: '#1F271B',
        width: '100%'

    },
    HeaderText:
    {
        fontFamily: fontNames.bold,
        fontSize: 20,
        color: '#FFFFFF'
    },
    FlightHeaderText:
    {
        marginLeft: '5%',
        fontFamily: fontNames.bold,
        fontSize: 20,
    },
    FlightHeader:
    {
        flex:1,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4%'
    },
    FlightCard:
    {
        margin: '7%',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        width: '86%',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 7,
    },
    AirInf:
    {
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flexWrap: 'wrap'
    },
    AirInfMainFont:
    {
        fontFamily: fontNames.bold,
        fontSize: 20,
        color: 'blue',
        marginBottom: '2%',
    },
    AirInfSecondaryFont:
    {
        fontFamily: fontNames.medium,
        fontSize: 13,
    },
    LeftAirInf:
    {
        flex: 1,
        alignItems: 'center',
        marginRight: '15%'
    },
    RightAirInf:
    {
        flex: 1,
        alignItems: 'center',
    },
    DepartureText:
    {
        fontFamily: fontNames.bold,
        fontSize: 15,
    },
    DepartureInfoText:
    {
        fontFamily: fontNames.regular,
        fontSize: 12,
    },
    DepartureInf:
    {
        flex: 1,
        alignItems: 'center',
    },
    ViewMore:
    {
        flex:1,
        flexDirection: 'row',
        padding: '4%',
        marginTop: '3%',
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    ViewMoreText:
    {
        fontFamily: fontNames.medium,
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: '20%'
    }

});

export default styles;
