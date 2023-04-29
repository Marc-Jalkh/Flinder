import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Auth";
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import Header from "../components/Header";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();
import Dashboard from "./Dashboard";
import colors from "../assets/StyleSheet/Colors";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccountInfo } from "../data/LoginSignUp";
import { ActivityIndicator } from 'react-native-paper';

import Rewards from "./Rewards";
const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Browse"
      activeColor={colors.primary}
      inactiveColor={colors.black}
      labeled={false}
    >
      <Tab.Screen
        name="Radar"
        component={Auth}
        options={{
          tabBarLabel: "Radar",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radar" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Auth}
        options={{
          tabBarLabel: "Browse",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search-location" size={26} color={color} />
                      ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarLabel: "Rewards",
          tabBarIcon: ({ color }) => (
        <FontAwesome5 name="gift" size={26} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="My Flights"
        component={Auth}
        options={{
          tabBarLabel: "My Flights",
          tabBarIcon: ({ color }) => (
        <Ionicons name="airplane" size={26} color={color}/>
        ),          }}
      />
    </Tab.Navigator>
  );
};
const Test = () => {
  return <View style={{ flex: 1, backgroundColor: "red" }}></View>;
};

const Home = (props) => {
  const [Opened, setOpened] = useState(false);
  const [info, setInfo] = useState([]);
  const [UserId, setUserId] = useState("");
  useEffect(() => {
    async function fetchUserInfo() {
      const uidString = await AsyncStorage.getItem('user');
      const uid = JSON.parse(uidString);
      setUserId(uid);
      const userAccountInfo = await getAccountInfo(uid);
      setInfo(userAccountInfo);
    }
    fetchUserInfo();
  }, []);
  if(!info.length > 0||UserId == "") {
    return (
      <View style={{flex : 1 , justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator animating={true}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>

      <View style={{ flex: 1 }}>
        {Opened ? (
          <Dashboard UserId={UserId} info={info} Opened={Opened} setOpened={setOpened} changed={props.changed} setChanged={props.setChanged} />
        ) : (
          <View style={{flex:1}}>
          <Header Opened={Opened} setOpened={setOpened} info={info} />
          <MainScreen />
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
