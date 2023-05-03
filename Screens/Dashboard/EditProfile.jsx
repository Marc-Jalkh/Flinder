    import {View , Text} from 'react-native';
    import { useState,useEffect } from "react";
    import React from "react";
    import {  Keyboard,  TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
    import { TextInput, Button, Avatar } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
import { DatePickerModal } from "react-native-paper-dates";
import colors from "../../assets/StyleSheet/Colors";
import { EditProf } from '../../data/LoginSignUp';
import *  as Location from 'expo-location'; 
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../../data/LoginSignUp';
const EditProfile = ({navigation, route}) => {
    const {info,setInfo,userId} = route.params;
    const [Fname,setFname] = useState(info[0]);
    const [Lname,setLname] = useState(info[1]);

    const [date, setDate] = React.useState(info[2]);
    const [open, setOpen] = React.useState(false);
    const [loca,setLoca] = useState(info[5]);
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
        EditProf(userId,info[4][0],info[4][1],info[4][2],info[4][3],[Fname,Lname,date,info[3],loca,image]);
        setInfo([Fname,Lname,date,info[3],info[4],loca,image]);
        navigation.navigate('Profile', {info: [Fname,Lname,date,info[3],info[4],loca,image]} )
    }

    const [location,setLocation] = useState(null);
    const [errorMsg,setErrorMsg] = useState(null);
    const [address,setAddress] = useState("");
    const [image,setImage] = useState(info[6]);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          
          let location = await Location.getCurrentPositionAsync({});
          let address = await Location.reverseGeocodeAsync(location.coords);
          setLocation(location);
          setAddress(address);
        })();
      }, []);
      
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (address.length > 0) {
        text = address[0].country+ ' '+ address[0].name;
      }

    HandleLoc = () => {
      if(text==='Waiting..'){
        alert('Please wait while we fetch your location');
        return;
      }
      setLoca(text);
    }

    const HandleProfilePic = async () => {
//Permissions
      const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(!granted){
        alert('You need to enable permission to access the library');
        return;
      }

      //open camera or gallery
      try{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if(result.canceled){
        return;
      }
        
        setImage(await uploadImage(result.assets[0].uri,userId,""));
        
    }
      catch(err){
      }
    }
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.Heading}>Edit Profile</Text>
            <TouchableOpacity onPress={()=>HandleProfilePic()}>
            <Avatar.Image size={150} style={styles.Avatr} source={{uri:image}} />
            </TouchableOpacity>
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
          Pick new Date
          </Button>
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />
            <Button style={{ borderRadius: "5px",marginTop: 10, textAlign:'left'}} textColor={colors.black} mode='outlined' onPress={() => HandleLoc()}>Set New location : {loca}</Button>

            </View>
            <Button style={styles.btn} mode='outlined' onPress={() => HandlePress()}>Save</Button>
        </View>
</TouchableWithoutFeedback>
    );
}

export default EditProfile;