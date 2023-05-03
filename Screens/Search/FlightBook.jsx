import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ticket from '../../assets/ticket.png';
import { Button } from 'react-native-paper';
import styles from '../../assets/StyleSheet/BookStyles.js';



function FlightBook({ route, navigation }) {

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

                    >Confirm Booking</Button>

                </View>


            </View>

            <View style={{ marginTop: '30%' }}>
                <Text>{'\n'}{'\n'}</Text>
            </View>

        </ScrollView>

    );
}

export default FlightBook;
