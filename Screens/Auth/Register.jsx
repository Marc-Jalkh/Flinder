import { Text, View } from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import styles from "../../assets/StyleSheet/Auth";
import React from "react";
import colors from "../../assets/StyleSheet/Colors";
import singUp from "../../data/LoginSignUp.js";
import { DatePickerModal } from "react-native-paper-dates";
import { StatusBar } from "expo-status-bar";
import { ValidateEmail, ValidatePassword } from "../../data/Validator";
import { Keyboard } from "react-native";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from 'expo-location';

const Register = ({ navigation ,route }) => {
  const {setChanged,changed} = route.params;
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [pass2, setPass2] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [loca, setLoca] = React.useState("");
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const [showimg, setShowimg] = React.useState(true);

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

  let dict = {
    name: "gray",
    lastName: "gray",
    dateOfBirth: "gray",
    text: "gray",
    pass: "gray",
    pass2: "gray",
  };
  const [error, setError] = React.useState("");
  const [error2, setError2] = React.useState(dict);

  const HandlePress = () => {
    let errors = "";
    if (!ValidateEmail(text)) {
      errors = "Email is not valid";
      dict["text"] = "red";
    }
    if (!ValidatePassword(pass)) {
      errors += "\nPassword is not valid";
      dict["pass"] = "red";
    }
    if (pass != pass2) {
      errors += "\nPasswords are not the same";
      dict["pass2"] = "red";
    }
    if (name == "" || lastName == "" || date == undefined) {
      errors += "\nPlease fill all the fields";
      if (name == "") dict["name"] = "red";
      if (lastName == "") dict["lastName"] = "red";
      if (date == undefined) dict["dateOfBirth"] = "red";
    }
    if(newloc==='Waiting..'){
      alert('Please wait while we fetch your location');
      return;
    }
    setLoca(newloc);
    if (errors != "") {
      setError(errors);
      setError2(dict);
      return;
    }
    const info = {
      FirstName: name,
      LastName: lastName,
      Email: text,
      Password: pass,
      DateOfBirth: date,
      Location: loca,
    };
    singUp(text, pass, checked, info, setChanged,changed,);
  };
  //location
  const [location,setLocation] = React.useState(null);
  const [errorMsg,setErrorMsg] = React.useState(null);
  const [address,setAddress] = React.useState("");
  React.useEffect(() => {
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
    
    let newloc = 'Waiting..';
    if (errorMsg) {
      newloc = errorMsg;
    } else if (address.length > 0) {
      newloc = address[0].country+ ' '+ address[0].name;
    }
    
  //event listener on keyboard dismiss 
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setShowimg(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setShowimg(true);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (

    <View style={styles.container}>
      <View style={styles.textBox}>
      <ScrollView>
      {showimg? <Avatar.Image size={150} style={{alignSelf:'center'}} source={require('../../assets/img/logo.png')} />:null}
        <Text style={styles.error}>{error}</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={(name) => {
              setName(name);
            }}
            style={{ flex: 1, marginRight: 5 }}
            outlineColor={error2["name"]}
          />
          <TextInput
            label="LastName"
            mode="outlined"
            value={lastName}
            style={{ flex: 1, marginLeft: 5 }}
            onChangeText={(lastName) => setLastName(lastName)}
            outlineColor={error2["LastName"]}
          />
        </View>
        <TextInput
          label="Email"
          mode="outlined"
          value={text}
          onChangeText={(text) => setText(text)}
          outlineColor={error2["text"]}
        />
          <Button
            onPress={() => setOpen(true)}
            textColor={colors.black}
            style={{
              borderRadius: "5px",
              marginTop: 5,
              borderColor: error2["dateOfBirth"],
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
        <TextInput
          label="Password"
          value={pass}
          mode="outlined"
          onChangeText={(pass) => setPass(pass)}
          outlineColor={error2["pass"]}
        />
        <TextInput
          label="Password"
          value={pass2}
          mode="outlined"
          onChangeText={(pass2) => setPass2(pass2)}
          outlineColor={error2["pass2"]}
        />
        {address? <Text style={styles.Locs}>Location detected: {address[0].country}</Text>:<Text style={styles.Locs}>Location not detected.</Text>
        }
        </ScrollView>
      </View>
      <View style={styles.GetStarted}>
        <Button
          mode="contained"
          buttonColor={colors.primary}
          onPress={() => HandlePress()}
          style={styles.Register}
        >
          Register
        </Button>
        <Button
          mode="text"
          style={styles.Login}
          textColor={colors.primary}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Register;
