import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "../../assets/StyleSheet/Auth";
import React from "react";
import colors from "../../assets/StyleSheet/Colors";
import {signIn} from '../../data/LoginSignUp.js';
import { ValidateEmail,ValidatePassword } from "../../data/Validator";
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-paper';

const Register = ({ navigation ,route }) => {
  const {setChanged,changed} = route.params;
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const [error,setError] = React.useState("");
  const HandlechangeTXT = (text) => {
    setText(text);
    setError("");
  };
  const HandlechangePass = (pass) => {
    setPass(pass);
    setError("");
  };
  const HandlePress = () => {
    if(!ValidateEmail(text)){
      setError("Email is not valid");
      return;
    }
    if(!ValidatePassword(pass)){
      setError("Password is not valid");
      return;
    }
    signIn(text, pass, checked,setChanged,changed, (errorMsg) => {
      setError(errorMsg);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    <View style={styles.container}>

    <Avatar.Image size={150} style={{position:'absolute',marginTop:30, alignSelf:'center'}} source={require('../../assets/img/logo.png')} />
      <View style={styles.textBox}>
      <Text style={styles.error}>{error}</Text>
        <TextInput
          label="Email"
          mode="outlined"
          value={text}
          onChangeText={(text) => HandlechangeTXT(text)}
        />
        <TextInput
          label="Password"
          value={pass}
          mode="outlined"
          onChangeText={(pass) => HandlechangePass(pass)}
        />
      </View>
      <View style={styles.GetStarted}>
        <Button
          mode="contained"
          buttonColor={colors.primary}
          onPress={() => HandlePress()}
          style={styles.Register}
        >
          Login
        </Button>
        <Button
          mode="text"
          style={styles.Login}
          textColor={colors.primary}
          onPress={() => navigation.navigate("SignUp")}
        >
          Register
        </Button>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
