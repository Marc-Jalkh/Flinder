import {View , Text} from 'react-native';
import { useState } from "react";
import React from "react";
import { TextInput, Button, Avatar } from "react-native-paper";
import colors from "../../assets/StyleSheet/Colors";
import { Image } from 'react-native';
import { EditProf } from '../../data/LoginSignUp';
import styles from '../../assets/StyleSheet/Profile';
import { Timestamp } from "firebase/firestore";
import {  Keyboard,  TouchableWithoutFeedback } from 'react-native';

const PaymentMethod = ({navigation, route}) => {
    const {info,userId,setInfo} = route.params;
    const [Cnb,setCnb] = useState(info[4][0]);
    const [name,setname] = useState(info[4][1]);
    const [cvv,setcvv] = useState(info[4][3]);
    let time = []
    if(info[4]){
        time = info[4][2].split('-')
    }
    const [ExpMonth,HandleMnth] = useState(time[0]);
    const [ExpYear,HandleYear] = useState(time[1]);

    const [showPic,setshowPic] = useState(true);

    const setExpYear = (ExpYear) => {
        if(ExpYear.length > 4)
     {  setmsg("Invalid Year");
        setsuccess(true);
         return;
       } 
        HandleYear(ExpYear);
    }
    const setExpMonth = (ExpMonth) => {
        if(ExpMonth.length > 2)
        {  setmsg("Invalid Month");
            setsuccess(true);
                return;
        }  HandleMnth(ExpMonth);
    }
    const [success,setsuccess] = useState(false);
    const [msg,setmsg] = useState('');
    function HandlePress(){
        //save in the database
        if(Cnb.length != 16 || cvv.length != 3 || name.length <3){
            setmsg("Invalid Input");
            setsuccess(true);
            return;
        }
        if(parseInt(ExpYear) < Timestamp.now().toDate().getFullYear()){
            setmsg("Invalid Year");
            setsuccess(true);
            return;
        }
        if(parseInt(ExpMonth) > 12 || parseInt(ExpMonth) < 1){
            setmsg("Invalid Month");
            setsuccess(true);
            return;
        }
        setInfo([info[0],info[1],info[2],info[3],[Cnb,name,(ExpYear+'-'+ExpMonth),cvv]]);
        EditProf( userId,Cnb,name,(ExpYear+'-'+ExpMonth),cvv,info);
        setsuccess(true);
        setmsg("Saved Successfully");
    }
    const HandleCnb = (Cnb) => {
        if(Cnb.length <= 16)
        setCnb(Cnb);
        else {setmsg("Invalid Card Number");
        setsuccess(true);
    }
    }
    const Handlecvv = (cvv) => {
        if(cvv.length <= 3)
        setcvv(cvv);
        else {setmsg("Invalid CVV");
        setsuccess(true);
    }
    }


    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            success? setsuccess(false):null
            showPic? null:setshowPic(true)
        }}>
        <View style={styles.container}>

            <Text style={styles.Heading}>Payment Method</Text>
        {showPic ?    <Image style={styles.PayCard} source={require('../../assets/img/card.png')} />:null }
        <View style={styles.txtContainer}>
            {success ? <Text style={{textAlign:'center',color:'green',fontFamily:'Uncut-Sans-Medium',fontSize:20}}>{msg}</Text> : null
        }
            <TextInput
          label="Card Number"
          keyboardType = 'number-pad'
          mode="outlined"
          value={Cnb}
          onChangeText={(Cnb) => HandleCnb(Cnb)}
          onFocus={() => setshowPic(false)}
        />
        <TextInput
            style={{marginTop:10,marginBottom:10}}
            label="Card Name"
            mode="outlined"
            value={name}
            onChangeText={(name) => setname(name)}
            onFocus={() => setshowPic(false)}
        />

        <View style={{marginBottom:10, flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput style={{width:'48%'}}
            label="Expiry Date"
            keyboardType = 'number-pad'
            mode="outlined"
            value={ExpMonth}
            onChangeText={(ExpMonth) => setExpMonth(ExpMonth)}
            onFocus={() => setshowPic(false)}
          />
        <TextInput style={{width:'48%'}}
            label="Year"
            keyboardType = 'number-pad'
            mode="outlined"
            value={ExpYear}
            onChangeText={(ExpYear) => setExpYear(ExpYear)}
            onFocus={() => setshowPic(false)}
       />
        </View>
        <TextInput
            label="CVV"
            keyboardType = 'number-pad'
            mode="outlined"
            value={cvv}
            onChangeText={(cvv) => Handlecvv(cvv)}
            onFocus={() => setshowPic(false)}
        />
        </View>
        <Button style={styles.btn} mode='outlined' onPress={() => HandlePress()}>Save</Button>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default PaymentMethod;
