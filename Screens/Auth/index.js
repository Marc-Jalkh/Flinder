import { StatusBar } from 'expo-status-bar';
import { Text, View,ImageBackground } from 'react-native';
import styles from '../../assets/StyleSheet/Auth';
import { Button } from 'react-native-paper';
import colors from '../../assets/StyleSheet/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
const Auth = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
    <View style={styles.container}>
      <Text style={styles.SmallHeadingText}>It's a Big World</Text>
      <ImageBackground  source={require('../../assets/img/travel.png')}  style={{ flex:1}} >
      <Text style={styles.BigHeadingText}>Out There,{'\n'}Go Explore</Text>
      <View style={styles.GetStarted}>
      <Button mode='contained' style={styles.Register} buttonColor={colors.secondary}  onPress={() => navigation.navigate('SignUp')}>Get Started </Button>
      <Button mode='text' style={styles.Login} textColor={colors.tertiary}  onPress={() => navigation.navigate('Login')}>Login </Button>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
}


export default Auth;