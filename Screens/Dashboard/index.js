import { StatusBar } from 'expo-status-bar';
import { View,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Values = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.info[0])}</Text>
      <Text>{JSON.stringify(props.info[1])}</Text>
      <Text>{JSON.stringify(props.info[2])}</Text>
    </View>
  );
}
const Dashboard = (props) => {
  return (
    <View style={{flex:1}}>
    <Text>Dashboard</Text>
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Feed} />
      <Drawer.Screen name="Passport" component={Article} />
      <Drawer.Screen name="Payment" component={Article} />
      {
        //logout button
      }
    </Drawer.Navigator>
    <Button title="Back" mode="outlined" onPress={() => props.setOpened(!props.Opened)} >
      Back
    </Button>
    <Button title="Logout" mode="outlined" onPress={() => {
      AsyncStorage.clear();
      props.setChanged(!props.changed);
    }} >
      Logout
    </Button>
    <StatusBar style="auto" />
    </View>

  );
}


export default Dashboard;