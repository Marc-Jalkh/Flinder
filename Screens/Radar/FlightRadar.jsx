
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from '../../assets/StyleSheet/RadarStyle';
import { TextInput, Button } from 'react-native-paper';
import Bg from '../../assets/Radar.png'
import { Keyboard } from 'react-native';
import colors from '../../assets/StyleSheet/Colors.js';

const fetch = require('node-fetch');

async function ApiCall(ID, navigation) {

    const url = `https://flight-radar1.p.rapidapi.com/flights/search?query=${ID}&limit=25`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37eb057568mshea99539730d302ap18698cjsn02caf7728f7d',
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const Jsonresult = JSON.parse(result)


        try
        {
        const test = Jsonresult.results.at(1).detail.lat;
        } catch(error) {
            alert("Invalid ID")
            return;
        }


        if (Jsonresult.results.at(1).detail.lat != undefined) {
            navigation.navigate({ name: 'Info', params: { data: Jsonresult }, merge: true });
        }

        else alert("No flights found")

    } catch (error) {
        alert("Invalid ID")
        console.error(error);
    }
}


const FlightRadar = ({ navigation }) => {

    const [ID, setID] = React.useState('')

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>


                <ImageBackground source={Bg} style={styles.ImageStyle}>
                    <View style={styles.SearchBar}>


                        <Text style={styles.SearchBarText}>Enter A Flight Number to Lookup</Text>

                        <TextInput
                            mode='flat'
                            label={"ID"}
                            value={ID}
                            onChangeText={text => {
                                setID(text)
                            }
                            }
                        />

                        <Button
                            backgroundColor={colors.primary}
                            textColor={colors.white}
                            style={styles.button}
                            onPress={() => ApiCall(ID, navigation)}
                        >
                            Search
                        </Button>

                    </View>
                </ImageBackground>


            </View>
        </TouchableWithoutFeedback>


    )
}

export default FlightRadar;