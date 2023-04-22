import { StyleSheet } from "react-native";
import colors from "./Colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: colors.white,
    },
    SmallHeadingText: {
        fontSize: 20,
        marginLeft: 20,
        color: colors.black,
    },
    BigHeadingText: {
        marginLeft: 40,
        fontSize: 60,
        fontWeight: 'bold',
        color: colors.black,
    },
    GetStarted: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 450,
    },
    Login: {
        marginTop: 15,
    },
});