import { View, Image, Text } from "react-native-web";
import styles from "../assets/StyleSheet/Header";
import { Avatar } from "react-native-paper";

const Header = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/img/logo.png')} />
            <Avatar.Image size={24} source={require('../assets/img/logo.png')} />
            </View>
    );
}

export default Header;