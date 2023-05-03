import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ticket from '../../assets/ticket.png';
import { Button } from 'react-native-paper';
import styles from '../../assets/StyleSheet/BookStyles.js';



function FlightBook({route, navigation}) {

    const Data = route.params.props;

    return (
        <ScrollView>
            <View style={styles.Title}>

                <Text style={styles.TextTitle}>Confirm booking</Text>

            </View>

            <View style={styles.TicketView}>
                <Image
                    source={ticket}
                    style={styles.ticket}

                />
                <View style={styles.BookingInfo}>

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Departing Airport:  </Text>
                        <Text style={styles.BookingTextInfo}> {Data.from} </Text>
                    </View>

                    <View style={styles.BookingInfoLine}>
                        <Text style={styles.BookingText}> Arriving Airport: </Text>
                        <Text style={styles.BookingTextInfo}> {Data.to} </Text>
                    </View>


                    <Text style={styles.BookingText}> Departing Date:  </Text>
                    <Text style={styles.BookingTextInfo}> {Data.date}{'\n'} </Text>


                    <Text style={styles.BookingText}> Departing Time: </Text>
                    <Text style={styles.BookingTextInfo}> {Data.time}{'\n'} </Text>


                    <View style={{alignContent: 'center', marginLeft: '38%', marginTop: '20%'}}>

                        <Text style={styles.BookingText}> Price: </Text>
                        <Text style={styles.BookingTextInfo}> {Data.price}$ </Text>

                    </View>

                    <Button 
                    icon="check" 
                    style={styles.ConfirmButton}

                    >Confirm Booking</Button>

                </View>


            </View>

        <View style={{marginTop: '30%'}}>
            <Text>{'\n'}{'\n'}</Text>
        </View>

        </ScrollView>

    );
}

export default FlightBook;
