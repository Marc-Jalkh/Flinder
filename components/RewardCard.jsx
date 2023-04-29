import { View,Text,Image } from "react-native";
import { StyleSheet } from "react-native";
const RewardCard = (props) => {
    return (
        <View style={{flex:1,backgroundColor:"red"}}>
            <View >
            <Image source={props.image} />
            <Text>{props.coins}</Text>
            </View>
            <Text>{props.itemName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RewardCard;