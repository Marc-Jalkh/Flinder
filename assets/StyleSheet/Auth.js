import { StyleSheet } from "react-native";
import colors from "./Colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginLeft: 20,
        backgroundColor: colors.white,
    },
    SmallHeadingText: {
        fontSize: 20,
        color: colors.black,
    },
    BigHeadingText: {
        marginLeft: 20,
        fontSize: 60,
        fontWeight: 'bold',
        color: colors.black,
    },
});