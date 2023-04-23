import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Auth  from './Screens/Auth';
import Home from './Screens';
import Login from './Screens/Auth/Login.jsx';
import Register from './Screens/Auth/Register.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={Register} options={{cardStyle: { backgroundColor: 'white' }}}/>
        <Stack.Screen name="Login" component={Login} options={{cardStyle: { backgroundColor: 'white' }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}