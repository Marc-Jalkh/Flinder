import styles from "../assets/StyleSheet/Header";
import { Avatar } from "react-native-paper";
import { View, Text,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Header = (props) => {
    return(
        <SafeAreaView edges={['top', 'left', 'right']}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.title}>Flinder</Text>
            </View>
            <Text>coins: {props.info[3]}</Text>
            <TouchableOpacity onPress={() => props.setOpened(!props.Opened)}>
            <Avatar.Image style={styles.profile} size={40} source={require('../assets/img/logo.png')} />
            </TouchableOpacity>

        </View>
        </SafeAreaView>
    );
}

export default Header;