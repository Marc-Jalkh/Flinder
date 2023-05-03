import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import AirportData from '../../airports.json'
import { enGB, registerTranslation } from 'react-native-paper-dates'
import RadioButtons from '../../components/ComponentsSearch/RadioButtons.jsx'
import CalendarDates from '../../components/ComponentsSearch/CalendarDates';
import styles from '../../assets/StyleSheet/SearchStyles.js';
import FlightInformation from '../../components/ComponentsSearch/FlightInformation';
import SearchButton from '../../components/ComponentsSearch/SearchButton';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Keyboard } from 'react-native';

registerTranslation('en-GB', enGB)

const fetch = require('node-fetch');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '37eb057568mshea99539730d302ap18698cjsn02caf7728f7d',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};


function SearchFrom({ navigation,route }) {
  const {UserId} = route.params;
  async function CallApi(data) {
    const { business, Economy, from: { id: fromId, title: fromTitle }, to: { id: toId, title: toTitle }, departure, arrival, adults } = data;

    const url = `https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip?sid=iSiX639&adults=${adults}&departure_date=${departure}&destination_airport_code=${toId}&cabin_class=${Economy ? 'economy' : 'business'}&origin_airport_code=${fromId}`;

    console.log(url)

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const Jsonresult = JSON.parse(result)

      if (Jsonresult.getAirFlightRoundTrip.results != undefined)
        navigation.navigate({ name: 'Browse', params: { result: Jsonresult,UserId: UserId }, merge: true })
      else alert("No flights found")

      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  }

  const [range, setRange] = React.useState({ startDate: new Date(), endDate: undefined });
  const [Dates, setDates] = React.useState({ Departure: undefined, Arrival: undefined })
  const [open, setOpen] = React.useState(false);

  const CalendarProps = { range: range, setRange: setRange, Dates: Dates, setDates: setDates, open: open, setOpen: setOpen }

  const datas = AirportData?.map((item) => ({
    id: item.code,
    title: item.code + ", " + item.city + ", " + item.country,
  }));

  const [Adults, setAdults] = React.useState('1')
  const [From, setFrom] = React.useState(datas['id'] === 'BEY');
  const [To, setTo] = React.useState(datas['id'] === 'CDG');

  const FlightInformationProps = { datas, Adults: Adults, setAdults: setAdults, From: From, setFrom: setFrom, To: To, setTo: setTo }

  const [DataForApi, setDataForApi] = React.useState({ business: RTchecked, Economy: OWchecked, from: null, to: null, departure: null, arrival: null, adults: null })
  const [Search, setSearch] = React.useState(false);

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const [OWchecked, setOwChecked] = React.useState(false);
  const [RTchecked, setRtChecked] = React.useState(true);
  const RadioButtonsProps = { OWchecked: OWchecked, setOwChecked: setOwChecked, RTchecked: RTchecked, setRtChecked: setRtChecked }

  function validateData({ DataForApi }) {
    return (DataForApi.from === null || DataForApi.to === null || DataForApi.departure === undefined || DataForApi.arrival === undefined || DataForApi.adults === null)
  }


  const getData = React.useCallback(() => {
    const ApiFrom = From;
    const ApiTo = To;
    let ApiDeparture = undefined
    if (Dates.Departure !== undefined) ApiDeparture = formatDate(Dates.Departure);
    let ApiArrival = undefined
    if (Dates.Arrival !== undefined) ApiArrival = formatDate(Dates.Arrival);
    const ApiAdults = Adults;
    const ApiOneWay = OWchecked;
    const Apibusiness = RTchecked;
    setDataForApi({ business: Apibusiness, Economy: ApiOneWay, from: ApiFrom, to: ApiTo, departure: ApiDeparture, arrival: ApiArrival, adults: ApiAdults });
  }, [Adults, Dates.Departure, Dates.Arrival, From, To, OWchecked, RTchecked]);


  React.useEffect(() => {
    if (Search === true) {
      if (DataForApi.from === null || DataForApi.to === null || DataForApi.departure === undefined || DataForApi.arrival === undefined || DataForApi.adults === null) {
        alert("Please fill all the fields")
        setSearch(false);
        setLoading(false)
      }
      else {
        CallApi(DataForApi);
        console.log(DataForApi);
        setSearch(false);
      }
    }
    else console.log(DataForApi);
  }, [DataForApi]);

  const [Loading, setLoading] = React.useState(false);


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaProvider>
      
      <View style={styles.HeaderStyle}>
        <Text style={styles.HeaderTextStyle}>Where To &#9992; </Text>
      </View>

      <View style={styles.SearchFrom}>


        <RadioButtons props={RadioButtonsProps}></RadioButtons>
        <FlightInformation props={FlightInformationProps}></FlightInformation>


        {Loading ? <ActivityIndicator style={{marginTop: '50%'}} animating={true} /> 
        : (
          <CalendarDates props={CalendarProps} ></CalendarDates>

        )}
        <TouchableOpacity
          onPress={() => {
            setSearch(true);
            setLoading(true);
            getData();
          }
          }
          style={{ height: '100%' }}
        >
          <SearchButton></SearchButton>
        </TouchableOpacity>

      </View>
    </SafeAreaProvider>
    </TouchableWithoutFeedback>


  )
}


export default SearchFrom;