import { Text, View } from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import styles from "../../assets/StyleSheet/Auth";
import React from "react";
import colors from "../../assets/StyleSheet/Colors";

const Register = ({navigation}) => {
    const [text, setText] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
        <View style={styles.textBox}>
          <TextInput
            label="Email"
            mode="outlined"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Password"
            value={pass}
            mode="outlined"
            onChangeText={(pass) => setPass(pass)}
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
            onPress={() => console.log("hi")}
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
      </View>
      );
    }

export default Register;