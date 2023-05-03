import {View , Text} from 'react-native';
import {  Button, Avatar, ActivityIndicator } from "react-native-paper";
import styles from '../../assets/StyleSheet/Profile';
import { customFonts } from '../../assets/StyleSheet/Colors';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

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


const Passport = ({navigation, route}) => {
    const {info,setInfo,userId} = route.params;
    const BD = timestamp(JSON.stringify(info[2]));
    
   return(
    <View>
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.Heading}>Passport</Text>
            <Avatar.Image size={150} style={styles.Avatr} source={{uri:info[6]}} />
            <View style={styles.txtContainer}>
            <Image source={{uri:info[6]}} style={{width:300,height:1000}} />
            <Text style={styles.txt}>To Change your passport picture click on it and select a new one !</Text>
            </View>
            <Button style={styles.btn} mode='outlined' onPress={() => navigation.navigate('EditProfile')}>Save</Button>
            </View>
        </ScrollView>
    </View>
);
}

export default Passport;