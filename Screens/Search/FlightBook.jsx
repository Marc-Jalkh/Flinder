import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ticket from '../../assets/ticket.png';
import { Button } from 'react-native-paper';
import styles from '../../assets/StyleSheet/BookStyles.js';
import { ProfileFlights } from '../../data/LoginSignUp';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { useRef } from 'react';

function FlightBook({ route, navigation }) {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    if (status === null) {
        requestPermission();
      }
      const imageRef = useRef();

    const Data = route.params.props;

    const HandlePress = async () => {
       try{
         await ProfileFlights(Data.Id,Data);
         navigation.navigate('Accept',{data:Data});
        }
       catch(e){
           alert(e);
       }
    }

    const HandleScreenShot = async () => {
        try {
            const uri = await captureRef(imageRef, {
                format: "jpg",
                quality: 0.8,
                height: 1500,
            });
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync("Download", asset, false);
            alert("Screenshot saved to gallery");
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <ScrollView>
            <View style={styles.Title}>

                <Text style={styles.TextTitle}>Confirm booking</Text>

            </View>

            <View style={styles.TicketView}ref={imageRef} collapsable={false}>
                <Image
                    source={ticket}
                    style={styles.ticket}

                />
                 
                <View style={styles.BookingInfo} >

                    <Image
                        source={{ uri: Data.logo }}
                        style={{ width: 80, height: 80, marginLeft: '37%', marginTop: '-10%', marginBottom: '10%', borderRadius: 50 }} />

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Plane: </Text>
                        <Text style={styles.BookingTextInfo}> {Data.PlaneCode} </Text>
                    </View>

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Cabin Class: </Text>
                        <Text style={styles.BookingTextInfo}> {Data.cabin_class} </Text>
                    </View>

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Departing Airport:  </Text>
                        <Text style={styles.BookingTextInfo}> {Data.from} </Text>
                    </View>

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Arriving Airport: </Text>
                        <Text style={styles.BookingTextInfo}> {Data.to} </Text>
                    </View>

                    <Text style={styles.BookingText}> Departing Date:  </Text>
                    <Text style={styles.BookingTextInfo}> {Data.date} </Text>


                    <Text style={styles.BookingText}> Departing Time: </Text>
                    <Text style={styles.BookingTextInfo}> {Data.time} </Text>

                    <Text style={styles.BookingText}> Price: </Text>
                    <Text style={styles.BookingTextInfo}> {Data.price}$ </Text>


                    <Button
                        icon="check"
                        style={styles.ConfirmButton}
                        onPress={() => HandlePress()}
                    >Confirm Booking</Button>

                </View>
                </View>

            <View style={{ marginTop: '30%' }}>
                <Text>{'\n'}{'\n'}</Text>
            </View>
            <Button onPress={HandleScreenShot}>Screenshot</Button>

        </ScrollView>

    );
}

export default FlightBook;
