    import {View , Text} from 'react-native';
    import { useState,useEffect } from "react";
    import React from "react";
    import {  Keyboard,  TouchableWithoutFeedback } from 'react-native';
    import { TextInput, Button, Avatar } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
import { DatePickerModal } from "react-native-paper-dates";
import colors from "../../assets/StyleSheet/Colors";
import { EditProf } from '../../data/LoginSignUp';
import *  as Location from 'expo-location'; 

const EditProfile = ({navigation, route}) => {
    const {info,setInfo,userId} = route.params;
    const [Fname,setFname] = useState(info[0]);
    const [Lname,setLname] = useState(info[1]);

    const [date, setDate] = React.useState(info[2]);
    const [open, setOpen] = React.useState(false);
  
    const onDismissSingle = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirmSingle = React.useCallback(
      (params) => {
        setOpen(false);
        setDate(params.date);
      },
      [setOpen, setDate]
    );
    function HandlePress(){
        EditProf(userId,info[4][0],info[4][1],info[4][2],info[4][3],[Fname,Lname,date,info[3]]);
        setInfo([Fname,Lname,date,info[3],info[4]]);
        navigation.navigate('Profile', {info: [Fname,Lname,date,info[3],info[4]]} )
    }

    function HandleLoc(){
       
    const [location,setLocation] = useState(null);
    const [errorMsg,setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location['coords']);
      }
    
    }

    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.Heading}>Edit Profile</Text>
            <Avatar.Image size={150} style={styles.Avatr} source={require('../../assets/img/logo.png')} />
            <View style={styles.txtContainer}>
            <TextInput
          label="First Name"
          style={{marginTop:10}}
          mode="outlined"
          value={Fname}
          onChangeText={(Fname) => setFname(Fname)}
        />
        <TextInput
            style={{marginTop:10}}
            label="Last Name"
            mode="outlined"
            value={Lname}
            onChangeText={(Lname) => setLname(Lname)}
        />
                  <Button
            onPress={() => setOpen(true)}
            textColor={colors.black}
            style={{
              borderRadius: "5px",
              marginTop: 10,
            }}
            uppercase={false}
            mode="outlined"
          >
            Pick single date
          </Button>
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />

            </View>
            <Button style={styles.btn} mode='outlined' onPress={() => HandlePress()}>Save</Button>
        </View>
</TouchableWithoutFeedback>
    );
}

export default EditProfile;