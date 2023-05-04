import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import styles from "../../assets/StyleSheet/MyFlightsStyles";
import airports from "../../airports.json";
import {useEffect, useState} from 'react';
const OnGoingFlights = (porps) => {
  const [cntr,setCntr]=useState("")
  let country="";
  airports.map((item,index)=>{
    if(item.code===porps.country.to){
      country=item.country;
    }
  }
  )
  useEffect(()=>{
    setCntr(country);

  }
  ,[country])

  return (
    <View style={styles.Ongoingcont}>
      <ImageBackground
        source={require("../../assets/img/logo.png")}
        style={styles.Imagecontainer}
      >
        <View style={{ flex: 1 }}>
          <Text></Text>
        </View>
        <View style={styles.TextContainer}>
        <Text>{porps.country.from + " -> "+cntr}</Text>
        <Text>Plane Code: {porps.country.PlaneCode}</Text>
        <Text>Date: {porps.country.date}</Text>
        <Text>Departure Time: {porps.country.time}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const PastFlights = (porps) => {
  const [cntr,setCntr]=useState("")
  let country="";
  airports.map((item,index)=>{
    if(item.code===porps.country){
      country=item.country;
    }
  }
  )
  useEffect(()=>{
    setCntr(country);

  }
  ,[country])

  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/logo.png")}
        style={{ width: 140, height: 120, marginTop: 20,marginLeft:10 }}
      >
        <View style={{ flex: 1 }}>
          <Text></Text>
        </View>
        <View style={{ height: 40, backgroundColor: "#fffb" }}>
        <Text>{cntr}</Text>
        <Text>{porps.DepDate} </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const MyFlights = ({ navigation, route }) => {
  const { info, UserId } = route.params;
  console.log(info[7]);
  if (info[7] == []) {
    return (
      <View>
        <Text>You have no flights Yet!</Text>
      </View>
    );
  }
  const firstItem=info[7][0];
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ marginLeft: "10%" }}>

        <Text style={styles.HeadingTxt}>My Flights:</Text>

          <OnGoingFlights country ={firstItem}/>
        </View>
        <Text style={styles.Moretxt}>More:</Text>

        <View style={{ flexDirection:'row',marginBottom:80}}>
        <ScrollView horizontal={true}>
          {
            info[7].map((item, index) => {
              return (
                <View style={styles.smallFlight} key={index}>
                  <PastFlights country={item.to} DepDate={item.date}/>
                </View>
              );
            }
            )
          }
        </ScrollView>
        </View>
      

    </View>
  );
};

export default MyFlights;
