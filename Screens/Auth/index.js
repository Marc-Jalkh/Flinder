import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../../assets/StyleSheet/Auth';
import { Button } from 'react-native-paper';
import colors from '../../assets/StyleSheet/Colors';
const Auth = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.SmallHeadingText}>It's a Big World</Text>
      <Text style={styles.BigHeadingText}>Out There,{'\n'}Go Explore</Text>
      <View style={styles.GetStarted}>
      <Button mode='contained' buttonColor={colors.primary}  onPress={() => navigation.navigate('SignUp')}>Get Started </Button>
      <Button mode='text' style={styles.Login} textColor={colors.primary}  onPress={() => navigation.navigate('Login')}>Login </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


export default Auth;