import { View,StyleSheet } from "react-native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import colors from "../../assets/StyleSheet/Colors";
import {rewards} from "../../data/Rewards.json";
import RewardCard from "../../components/RewardCard";
import { ScrollView } from "react-native";
const Rewards = (props) => {
    console.log(rewards);
    return (
        <ScrollView style={{flexDirection:'column'}}>
            <View style={{height:150,width:'49%'}}>
            <RewardCard coins={rewards[0].coins} itemName={rewards[0].itemName} image={rewards[0].image} />
            </View>
            <View style={{height:150,width:'49%'}}>
            <RewardCard coins={rewards[0].coins} itemName={rewards[0].itemName} image={rewards[0].image} />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        flexDirection: "row",
    },
});

export default Rewards;