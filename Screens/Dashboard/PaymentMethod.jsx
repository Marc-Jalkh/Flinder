import {View , Text} from 'react-native';
import { useState } from "react";
import React from "react";
import { TextInput, Button, Avatar } from "react-native-paper";
import colors from "../../assets/StyleSheet/Colors";
import { EditProf } from '../../data/LoginSignUp';
import styles from '../../assets/StyleSheet/Profile';
import { Timestamp } from "firebase/firestore";

const PaymentMethod = ({navigation, route}) => {
    const {info,userId} = route.params;
    const [Cnb,setCnb] = useState(info[4][0]);
    const [name,setname] = useState(info[4][1]);
    const [cvv,setcvv] = useState(info[4][3]);
    function HandlePress(){
        //save in the database
        EditProf(userId,12345678,"name",12,12,info);
    }


    return(
        <View style={styles.container}>
            <Text style={styles.Heading}>Payment Method</Text>
            <Avatar.Image size={200} style={styles.Avatr} source={require('../../assets/img/logo.png')} />
            <View style={styles.txtContainer}>
            <TextInput
          label="Card Number"
          mode="outlined"
          value={Cnb}
          onChangeText={(Cnb) => setCnb(Cnb)}
        />
        <TextInput
            label="Card Name"
            mode="outlined"
            value={name}
            onChangeText={(name) => setname(name)}
        />
        {
            //Exp Date
        }
        <TextInput
            label="CVV"
            mode="outlined"
            value={cvv}
            onChangeText={(cvv) => setcvv(cvv)}
        />
        </View>
        <Button style={styles.btn} mode='outlined' onPress={() => HandlePress()}>Save</Button>
        </View>
    );
}

export default PaymentMethod;
