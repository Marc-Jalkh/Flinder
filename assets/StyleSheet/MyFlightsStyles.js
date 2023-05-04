import { StyleSheet } from "react-native";
import colors from "./Colors";
import {customFonts} from "./Colors";

customFonts();

export default StyleSheet.create({
    Imagecontainer:{
        width: 320, 
        height: 300, 
        marginTop: 20,
    },
    Ongoingcont:{
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
        marginBottom: 20,
    }
});