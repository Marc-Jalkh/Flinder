import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './Auth';
import Header from '../components/Header';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
    <Header />
    <View style={{flex:1}}>
    <Tab.Navigator>
    <Tab.Screen name="Radar" component={Auth} />
    <Tab.Screen name="Setings" component={Auth} />
      <Tab.Screen name="Home" component={Auth} />
    </Tab.Navigator>
    </View>
    <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

export default Home;