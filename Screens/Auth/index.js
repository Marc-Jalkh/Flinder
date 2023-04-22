import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../../assets/StyleSheet/Auth';
import { Button } from 'react-native-paper';
import colors from '../../assets/StyleSheet/Colors';
const Auth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.SmallHeadingText}>It's a Big World</Text>
      <Text style={styles.BigHeadingText}>Out There,{'\n'}Go Explore</Text>
      <Button mode='contained' buttonColor={colors.primary}  onPress={() => console.log('Pressed')}>Get Started </Button>
      <StatusBar style="auto" />
    </View>
  );
}


export default Auth;