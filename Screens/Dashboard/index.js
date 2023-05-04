import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-paper';
import { View,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/ProfileHeader';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Passport from './Passport';
import Profile from './Profile';
import EditProfile from './EditProfile';
import PaymentMethod from './PaymentMethod';
import { Dimensions } from 'react-native';
const Drawer = createDrawerNavigator(); 
const Values = (props) => {
  return (
    <View>
      <Text>{(props.info[0])}</Text>
      <Text>{JSON.stringify(props.info[1])}</Text>
      <Text>{JSON.stringify(props.info[2])}</Text>
    </View>
  );
}

const Dashboard = (props) => {
  const {setChanged , changed} = props;
  const {setOpened , Opened} = props;
  const {setChanging, changing} = props;
  if(changing) {
    setChanging(!changing);
    setOpened(!Opened);
  }
  if(props.info.length < 1) {
    return (
      <View style={{flex : 1 , justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator animating={true}/>
      </View>
    );
    }
    const info = props.info;
    const userId = props.UserId;
    const setInfo = props.setInfo
  return (
    <View style={{flex:1}}>
    <Drawer.Navigator
    screenOptions={{
      header: ({ navigation }) => (
      <Header navigation={navigation} setOpened={setOpened} Opened={Opened} />
    ),
    drawerPosition:"right",
        }}
         
     initialRouteName="Profile" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList  {...props} />
        <View style={{flex: 1,height:Dimensions.get('window').height-300}}>
      <Text></Text>
        </View>


    <DrawerItem label="Back" onPress={() => setOpened(!Opened)} />
    <DrawerItem label="Logout" onPress={() => {
      AsyncStorage.clear();
      setChanged(!changed)
    }} />

        </DrawerContentScrollView>
    )
  }}>
      <Drawer.Screen name="Profile" component={Profile} initialParams={{info}}/>
      <Drawer.Screen name="EditProfile" component={EditProfile} options={{drawerItemStyle: {height: 0}}} initialParams={{info,setInfo,userId}}/>
      <Drawer.Screen name="Payment" initialParams={{info,setInfo,userId}} component={PaymentMethod} />
    </Drawer.Navigator>

    <StatusBar style="auto" />
    </View>

  );
}


export default Dashboard;