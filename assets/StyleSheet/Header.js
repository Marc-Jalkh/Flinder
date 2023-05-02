import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";

customFonts();

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: 50,
    },
    logo: {
        height: 50,
        width: 50,
    },
    profile: {
        marginTop: 5,
        marginRight: 20,
    },
    burgerNav: {
        marginTop: 13,
        marginRight: 20,
    },
    title: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 35,
        fontFamily: 'Uncut-Sans-Bold',
        color: colors.primary,
    }
});