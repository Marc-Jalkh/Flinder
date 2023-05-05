import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import styles from "../../assets/StyleSheet/MyFlightsStyles";
import airports from "../../airports.json";
import {useEffect, useState} from 'react';
import countryimg from "../../data/countryimg.json";

const OnGoingFlights = (porps) => {
  const [cntr,setCntr]=useState("")
  let country="";
  airports.map((item,index)=>{
    if(item.code===porps.country.to){
      country=item.country;
    }
  }
  )
  const [img,setImg]=useState("")
  function setImgs(imgs){
    if (imgs== undefined){
      imgs="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.salonlfc.com%2Fen%2Fimage-not-found-2%2F&psig=AOvVaw2CbmC-haDkKbIXpOqU_rmB&ust=1683367130643000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj737H13f4CFQAAAAAdAAAAABAE"
    }
    setImg(imgs);
  }

  useEffect(()=>{
    setCntr(country);
    for(countrie in countryimg){
      if(countrie==country){
        setImgs(countryimg[countrie]);
      }
    }

  }
  ,[country])
  if(img==""){
    return ( 
      <ActivityIndicator animating={true} />
    )
  }
  return (
    <View style={styles.Ongoingcont}>
      <ImageBackground
        source={{uri : img}}
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
  const [img,setImg]=useState("")
  function setImgs(imgs){
    if (imgs== undefined){
      imgs="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.salonlfc.com%2Fen%2Fimage-not-found-2%2F&psig=AOvVaw2CbmC-haDkKbIXpOqU_rmB&ust=1683367130643000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj737H13f4CFQAAAAAdAAAAABAE"
    }
    setImg(imgs);
  }
  let country="";
  airports.map((item,index)=>{
    if(item.code===porps.country){
      country=item.country;
    }
  }
  )
  useEffect(()=>{
    setCntr(country);
    for(countrie in countryimg){
      if(countrie==country){
        setImgs(countryimg[countrie]);
      }
    }
  }
  ,[country])
  if(img==""){
    return (
      <ActivityIndicator animating={true} />
    )
  }
  return (
    <View>
      <ImageBackground
        source={{uri : img}}
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
  const [firstItem,setFirstItem]=useState(info[7][0])

  //if array == empty return no flights
  if (info[7].length === 0) {
    return (
      <View>
        <Text>You have no flights Yet!</Text>
      </View>
    );
  }
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
                <TouchableOpacity key={index} onPress={()=>{setFirstItem(item)}}>
                <View style={styles.smallFlight} >
                  <PastFlights country={item.to} DepDate={item.date}/>
                </View>
                </TouchableOpacity>
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
