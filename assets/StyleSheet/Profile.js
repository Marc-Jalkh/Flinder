import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";
customFonts();

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    Heading: {
        marginTop: 15,
        fontSize: 35,
        fontFamily: 'Uncut-Sans-Bold',
    },
    Avatr: {
        marginTop: 20,
        marginBottom: 20,
    },
    PayCard:{
        marginTop: 20,
        marginBottom: 20,
        height: 150,
        objectFit: 'contain',
    },
    txtContainer:{
        width:'80%',
        flex:1,
        marginTop:20,
    },
    txt:{
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'UncutSansRegular',
    },
    btn:{
        width:'80%',
        marginBottom: 50,
    }
});