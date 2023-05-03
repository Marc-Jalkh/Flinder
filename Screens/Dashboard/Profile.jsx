import {View , Text} from 'react-native';
import { TextInput, Button, Avatar, ActivityIndicator } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
import { customFonts } from '../../assets/StyleSheet/Colors';

customFonts();
const timestamp = (date) => {
    const dateArr = date.split('-');
    let year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2].split('T')[0];
    //remove first digit of year
    year = year.slice(1,5);
    return `${day}/${month}/${year}`;
}


const Profile = ({navigation, route}) => {
    const {info} = route.params;
    const BD = timestamp(JSON.stringify(info[2]));


    
   return(
        <View style={styles.container}>
            <Text style={styles.Heading}>Profile</Text>
            <Avatar.Image size={150} style={styles.Avatr} source={{uri:info[6]}} />
            <View style={styles.txtContainer}>
            <Text style={styles.txt}><Text  style={{fontFamily:'Uncut-Sans-Medium'}}>First Name:</Text> { info[0] }</Text>
            <Text style={styles.txt}><Text  style={{fontFamily:'Uncut-Sans-Medium'}}>Last Name:</Text> { info[1] }</Text>
            <Text style={styles.txt}><Text  style={{fontFamily:'Uncut-Sans-Medium'}}>Date Of Birth:</Text> { BD}</Text>
            <Text style={styles.txt}><Text  style={{fontFamily:'Uncut-Sans-Medium'}}>Location:</Text> { info[5]}</Text>
            </View>
            <Button style={styles.btn} mode='outlined' onPress={() => navigation.navigate('EditProfile')}>Edit Profile</Button>
        </View>

    );
}

export default Profile;