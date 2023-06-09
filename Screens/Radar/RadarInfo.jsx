
import * as React from 'react';
import { View, Text,ImageBackground, ScrollView } from 'react-native';
import styles from '../../assets/StyleSheet/RadarStyle';
import Bg from '../../assets/Radar.png'
import MapView, { Marker } from 'react-native-maps';



const FlightRadar = ({ route }) => {

    const data = route.params.data


    const [MapRegion, setMapRegion] = React.useState({
        latitude: data.results.at(1).detail.lat,
        longitude: data.results.at(1).detail.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })



    return (
        <View>

            <ImageBackground source={Bg} style={styles.ImageStyle}>
            <View style={{marginLeft: '10%', marginRight: '10%'}}>
                <View style={styles.SearchBarMap}>

                    <View style={styles.InfoView}>

                        <MapView region={MapRegion} style={styles.map}>
                            <Marker coordinate={MapRegion} title="Market" />
                        </MapView>


                        <Text style={styles.InfoTitleText}>ID: <Text style={styles.InfoText}>{data.results.at(1).detail.flight}</Text></Text>

                        <Text style={styles.InfoTitleText}>Longitude: <Text style={styles.InfoText}>{data.results.at(1).detail.lat}</Text></Text>

                        <Text style={styles.InfoTitleText}>Latitude: <Text style={styles.InfoText}>{data.results.at(1).detail.lon}</Text></Text>

                        <Text style={styles.InfoTitleText}>Route: <Text style={styles.InfoText}>{"\n"+data.results.at(1).detail.route}</Text></Text>

                        <Text style={styles.InfoTitleText}>Callsign: <Text style={styles.InfoText}>{data.results.at(1).detail.callsign}</Text></Text>

                    </View>
                </View>
                </View>
            </ImageBackground>


        </View>


    )
}

export default FlightRadar;