import { View,StyleSheet } from "react-native";
import colors from "../../assets/StyleSheet/Colors";
import {rewards} from "../../data/Rewards.json";
import RewardCard from "../../components/RewardCard";
import { ScrollView,Text } from "react-native";
import { getAccountInfo } from "../../data/LoginSignUp";
import { useState } from "react";
import { useEffect } from "react";

const Rewards = ({navigation, route}) => {
    const [change, setChange] = useState(false);
    const {info,setNewInfo,UserId} = route.params;
 


    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.subContainer}>

            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
            {
                rewards.map((item,index) => {
                    return (
                        <View key={index} style={{width:'47%',height:150,marginLeft:5,marginRight:5,marginTop:10}} >
                        <RewardCard navigation={navigation} key={index} coins={item.coins} setInfo={setNewInfo} setChange={setChange} change={change} UserId={UserId} info={info} itemName={item.itemName} />
                        </View>
                )}
                )
}   
</View>
            </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: "row",
    },
    subContainer: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,

    }
});

export default Rewards;