import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth  from './Screens/Auth';
import Home from './Screens/index.js';
import Login from './Screens/Auth/Login.jsx';
import Register from './Screens/Auth/Register.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import {customFonts} from "./assets/StyleSheet/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';
customFonts();

const WelcomeScreen = (props) => {
  const Stack = createStackNavigator();
  const {setChanged,changed} = props;
  return (
    <Stack.Navigator initialRouteName='Auth'>
    {       // <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
           }<Stack.Screen name="Auth" component={Auth}  options={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}/>
            <Stack.Screen name="SignUp" component={Register} initialParams={{setChanged,changed}} options={{cardStyle: { backgroundColor: 'white' }}}/>
            <Stack.Screen name="Login" component={Login} initialParams={{setChanged,changed}} options={{cardStyle: { backgroundColor: 'white' }}}/>
          </Stack.Navigator>
  );
};


export default function App() {

  const customTheme = {
    fonts: {
      labelLarge: {
        fontFamily: 'UncutSansRegular',
        fontWeight: 'normal',
      },
      labelMedium: {
        fontFamily: 'UncutSansRegular',
        fontWeight: 'normal',
      },
      titleLarge:{
        fontFamily: 'Uncut-Sans-Bold',
        fontWeight: 'normal',
      },
      bodySmall: {
        fontFamily: 'UncutSansRegular',
        fontWeight: 'normal',
      },
      bodyLarge: {
        fontFamily: 'UncutSansRegular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Uncut-Sans-Medium',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'Uncut-Sans-Bold',
        fontWeight: 'normal',
      },
    },
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
    }
    checkLoggedIn();
  }, [ AsyncStorage.getItem('isLoggedIn')]);
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <PaperProvider theme={customTheme}>
        {isLoggedIn ? <Home changed={changed} setChanged={setChanged}/> : <WelcomeScreen changed={changed} setChanged={setChanged}/>}
      </PaperProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}