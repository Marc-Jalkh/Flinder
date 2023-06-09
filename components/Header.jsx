import styles from "../assets/StyleSheet/Header";
import { Avatar } from "react-native-paper";
import { View, Text,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import coins icon 
import { Ionicons } from '@expo/vector-icons';
import colors from "../assets/StyleSheet/Colors";
import {getAccountInfo} from "../data/LoginSignUp.js"
import { useEffect } from "react";
import { useState } from "react";

const Header = (props) => {
    const userId = props.userId;


    return(
        <SafeAreaView edges={['top', 'left', 'right']}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.title}>Flinder</Text>
            </View>
            <Text style={{marginTop: 16,marginRight:10}} ><Ionicons name="ios-cash" size={20} color={colors.secondary} /><Text style={{fontSize:18}}>:{props.info[3]}</Text></Text>
            <TouchableOpacity onPress={() => props.setOpened(!props.Opened)}>
            <Avatar.Image style={styles.profile} size={40} source={{uri:props.info[6]}} />

            </TouchableOpacity>

        </View>
        </SafeAreaView>
    );
}

export default Header;