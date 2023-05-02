import { View,StyleSheet } from "react-native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import colors from "../../assets/StyleSheet/Colors";
import {rewards} from "../../data/Rewards.json";
import RewardCard from "../../components/RewardCard";
import { ScrollView,Text } from "react-native";
import { useState } from "react";
const Rewards = ({navigation, route}) => {
    const [change, setChange] = useState(false);
    const {info,setInfo,UserId} = route.params;
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.subContainer}>
                <AutocompleteDropdown
                    label="Search"
                    data={rewards}
                    valueExtractor={(item) => item.name}
                    onChangeText={(item) => console.log(item)}
                    placeholder="Search"
                    style={styles.input}
                    inputStyle={styles.inputText}
                    listStyle={styles.list}
                    listTextStyle={styles.listText}
                    listRowStyle={styles.listRow}
                    />
            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:10}}>
            {
                rewards.map((item,index) => {
                    return (
                        <View key={index} style={{width:'47%',height:150,marginLeft:5,marginRight:5,marginTop:10}} >
                        <RewardCard key={index} coins={item.coins} setInfo={setInfo} setChange={setChange} change={change} UserId={UserId} info={info} itemName={item.itemName} />
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
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,

    }
});

export default Rewards;