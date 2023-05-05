import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { getAccountInfo } from "../data/LoginSignUp";
import { useEffect, useState } from "react";
import { customFonts } from "../assets/StyleSheet/Colors";
import colors from "../assets/StyleSheet/Colors";
import { RedeemWithCoins } from "../data/LoginSignUp";
import { Ionicons } from '@expo/vector-icons';

customFonts();
import React from "react";
import { Portal, Dialog, Button } from "react-native-paper";


const RewardCard = (props) => {
  function HandlePress() {
    if (props.info[3] < props.coins) showDialog2();
    else {
      showDialog();
    }
  }


  const textColor = colors.primary;
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const [visible2, setVisible2] = React.useState(false);

  const showDialog2 = () => setVisible2(true);

  const hideDialog2 = () => setVisible2(false);


  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => HandlePress()}>
        <Image
          source={require("../assets/img/oscar.jpg")}
          style={{ width: "100%", height: 150, borderRadius: 20 }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "#fffd",
            height: 50,
            marginTop: 93,
            width: "92%",
            marginLeft: "4%",
            borderRadius: "15%",
          }}
        >
          <View style={{ marginLeft: 10, marginRight: 10, marginTop: 2 }}>
            <Text
              style={{
                fontFamily: "Uncut-Sans-Bold",
                lineHeight: 16,
                textAlign: "center",
                color: colors.black,
              }}
            >
              {props.itemName}
            </Text>
            <Text style={{ textAlign: "center", color: textColor }}>
              {props.coins} <Ionicons name="ios-cash" size={15} color={colors.secondary} />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{ color: colors.primary }}>Alert!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              By clicking on the redeem button you agree to the terms and
              services of the app and you will not be able to refund the coins
              after redeeming the reward.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={()=>{
              const coins= parseInt(props.info[3]-props.coins);
              RedeemWithCoins(props.UserId, coins);
              const news=[
        props.info[0],
        props.info[1],
        props.info[2],
        coins,
        props.info[4],
        props.info[5],
        props.info[6],
        props.info[7],
    ]
              props.setInfo(news);
              hideDialog();              
              
            }}>Redeem</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible2} onDismiss={hideDialog2}>
          <Dialog.Title style={{ color: "red" }}>Alert!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              You don't have enough coins to buy this reward.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={(hideDialog2)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RewardCard;
