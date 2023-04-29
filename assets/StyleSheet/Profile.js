import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";
customFonts();

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.tertiary,
        alignItems: 'center',
    },
    Heading: {
        marginTop: 20,
        fontSize: 35,
        fontFamily: 'Uncut-Sans-Bold',
    },
    Avatr: {
        marginTop: 20,
        marginBottom: 20,
    },
    txtContainer:{
        flex:1,
        marginTop:20,
    },
    txt:{
        marginBottom: 2,
        fontSize: 20,
        fontFamily: 'UncutSansRegular',
    },
    btn:{
        width:'80%',
        marginBottom: 50,
    }
});