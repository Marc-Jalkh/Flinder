import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import icon from '../../assets/airplane-icon.png';
import styles from '../../assets/StyleSheet/BrowseStyles';
import { TouchableOpacity } from 'react-native';

const FlightCard = ({ UserId, props, search_info, navigation}) => {

  const id = UserId;
  const AirlineName = props.slice_data.slice_0.airline.name;
  const AirlineLogo = props.slice_data.slice_0.airline.logo;
  const OriginCode = search_info.origin.code;
  const OriginName = search_info.origin.name;
  const DestinationCode = search_info.destination.code;
  const DestinationName = search_info.destination.name;
  const DepartureDate = props.slice_data.slice_0.departure.datetime.date;
  const DepartureTime = props.slice_data.slice_0.departure.datetime.time_12h;
  const ArrivalDate = props.slice_data.slice_0.arrival.datetime.date;
  const ArrivalTime = props.slice_data.slice_0.arrival.datetime.time_12h;
  const Price = props.price_details.baseline_total_fare_per_ticket;
  const PriceSymbol = props.price_details.display_symbol
  const PlaneCode = props.slice_data.slice_0.flight_data.flight_0.info.aircraft;
  const cabin_class = props.slice_data.slice_0.flight_data.flight_0.info.cabin_class

  const DataForBook =
  {
    from: OriginCode,
    to: DestinationCode,
    date: DepartureDate,
    time: DepartureTime,
    price: Price,
    logo: AirlineLogo,
    PlaneCode: PlaneCode,
    cabin_class: cabin_class,
    Id: id,
  }

  

  return (
    <View style={styles.FlightCard}>

      <View style={styles.FlightHeader}>

        <Text style={styles.FlightHeaderText}> Via {AirlineName} </Text>

        <Image
          source={{ uri: AirlineLogo }}
          style={{ width: 50, height: 50, alignSelf: 'flex-start', marginRight: '2%', marginTop: '2%' }}
        />
      </View>

      <View style={styles.AirInf}>
        <View style={styles.LeftAirInf}>
          <Text style={styles.AirInfMainFont}> ({OriginCode}) </Text>
          <Text style={styles.AirInfSecondaryFont}> {OriginCode == 'BEY'? "Beirut - Lebanon" : OriginName } </Text>
        </View>

        <View style={styles.RightAirInf}>
          <Text style={styles.AirInfMainFont}> ({DestinationCode}) </Text>
          <Text style={styles.AirInfSecondaryFont}> {DestinationName} </Text>
        </View>
      </View>

      <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'black', borderStyle: 'dashed', zIndex: 0, }}>
        <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
      </View>

      <View style={styles.AirInf}>
        <View style={styles.DepartureInf}>
          <Text style={styles.DepartureText}>Departure </Text>
          <Text style={styles.DepartureInfoText}>{DepartureDate} </Text>
          <Text style={styles.DepartureInfoText}>{DepartureTime} </Text>
        </View>

        <View>

          <Image
            source={icon}
            style={{ width: 50, height: 50 }} />
        </View>

        <View style={styles.RightAirInf}>
          <Text style={styles.DepartureText}>Arrival </Text>
          <Text style={styles.DepartureInfoText}>{ArrivalDate} </Text>
          <Text style={styles.DepartureInfoText}>{ArrivalTime} </Text>
        </View>

      </View>


    <TouchableOpacity
    onPress={() => navigation.navigate({name:'Book', params:{props: DataForBook}, merge: true})}
    >
      <View style={styles.ViewMore}>
        <Text style={styles.ViewMoreText}> Price: {Price} {PriceSymbol} </Text>
        <Text style={styles.ViewMoreText}> (View More)</Text>
      </View>
    </TouchableOpacity>
    </View>

  )
}

const FlightBrowse = ({route, navigation}) => {
  const data = (route.params.result);
  const UserId = route.params.UserId;
  const itineraryData = data.getAirFlightRoundTrip.results.result.itinerary_data;
  return (
      <ScrollView>
        <View>
          <View style={styles.HeaderStyle}>

            <Text style={[styles.HeaderText, {fontSize: 25}]}>{data.getAirFlightRoundTrip.results.result.search_data.search_0.origin.code} &#8594; {data.getAirFlightRoundTrip.results.result.search_data.search_0.destination.code}</Text>
            <Text style={[styles.HeaderText, { marginBottom: '2%' }]}> Found {data.getAirFlightRoundTrip.results.result.itinerary_count} results</Text>

          </View>

          <View style={styles.FlightCards}>
            {Object.keys(itineraryData).map((itinerary, i) => {
              return <FlightCard UserId={UserId} key={i} props={itineraryData[itinerary]} navigation={navigation} search_info={data.getAirFlightRoundTrip.results.result.search_data.search_0} />
            })}
          </View>


        </View>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

export default FlightBrowse;


