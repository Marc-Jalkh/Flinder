import { useEffect, useState } from "react";
import { getAccountInfo } from "../data/LoginSignUp";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";


 const Redeem = ({navigation,route}) => {
    const {UserId,info,setNewInfo} = route.params;
    const coins = route.params.coins;

    const news=[
        info[0],
        info[1],
        info[2],
        coins,
        info[4],
        info[5],
        info[6],
        info[7],
    ]
  
    const HandlePress = () => {
        console.log(info[3]);
         setNewInfo(news);
      navigation.navigate("Browse");
    }
    return (
      <View>
        <Text>Thank you for your loyalty!</Text>
        <Button onPress={() => HandlePress()}>Back</Button>
      </View>
    );
  };
  
  export default Redeem;