import {View , Text} from 'react-native';
import { TextInput, Button, Avatar } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
const Profile = ({navigation, route}) => {
    const {info} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.Heading}>Profile</Text>
            <Avatar.Image size={200} style={styles.Avatr} source={require('../../assets/img/logo.png')} />
            <View style={styles.txtContainer}>
            <Text style={styles.txt}>First Name: {info[0] }</Text>
            <Text style={styles.txt}>Last Name: {info[1] }</Text>
            <Text style={styles.txt}>Date Of Birth: { JSON.stringify(info[2])}</Text>
            </View>
            <Button style={styles.btn} mode='outlined' onPress={() => navigation.navigate('EditProfile')}>Edit Profile</Button>
        </View>

    );
}

export default Profile;