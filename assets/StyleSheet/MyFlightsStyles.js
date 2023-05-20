import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";

customFonts();

export default StyleSheet.create({
    Imagecontainer:{
        borderRadius: 20,
        width: 320, 
        height: 300, 
        marginTop: 20,
        oveerflow: "hidden",
    },
    Ongoingcont:{
        overflow: "hidden",
        borderRadius: 20,
        width: 320,
    },
    TextContainer:{
        width: "100%",
        height: 100, 
        backgroundColor: "#fffb"
    },
    HeadingTxt:{
        fontFamily: "Uncut-Sans-Bold",
        fontSize: 20,
        color: colors.black,
        marginTop: 20,
    },
    Moretxt:{
        fontFamily: "Uncut-Sans-Medium",
        fontSize: 20,
        color: colors.black,
        marginTop: 20,
        marginLeft: "10%"
    },
    smallFlight:{
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
    }
});