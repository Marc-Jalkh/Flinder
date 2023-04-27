import { Text, View } from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import styles from "../../assets/StyleSheet/Auth";
import React from "react";
import colors from "../../assets/StyleSheet/Colors";
import {signIn} from '../../data/LoginSignUp.js';
import { ValidateEmail,ValidatePassword } from "../../data/Validator";
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
    <View style={styles.container}>
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
        <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text >Remember Me</Text>
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
  );
};

export default Register;
