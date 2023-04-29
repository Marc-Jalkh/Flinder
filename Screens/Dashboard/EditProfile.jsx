    import {View , Text} from 'react-native';
    import { useState } from "react";
    import React from "react";
    import { TextInput, Button, Avatar } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
import { DatePickerModal } from "react-native-paper-dates";
import colors from "../../assets/StyleSheet/Colors";

const EditProfile = ({navigation, route}) => {
    const {info} = route.params;
    const [Fname,setFname] = useState(info[0]);
    const [Lname,setLname] = useState(info[1]);

    const [date, setDate] = React.useState(undefined);
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
        
        navigation.navigate('Profile')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.Heading}>Edit Profile</Text>
            <Avatar.Image size={200} style={styles.Avatr} source={require('../../assets/img/logo.png')} />
            <View style={styles.txtContainer}>
            <TextInput
          label="First Name"
          mode="outlined"
          value={Fname}
          onChangeText={(Fname) => setFname(Fname)}
        />
        <TextInput
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
              marginTop: 5,
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

    );
}

export default EditProfile;