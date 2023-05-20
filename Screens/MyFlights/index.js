import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import styles from "../../assets/StyleSheet/MyFlightsStyles";
import airports from "../../airports.json";
import {useEffect, useState} from 'react';
import countryimg from "../../data/countryimg.json";

const OnGoingFlights = (porps) => {
  const [cntr,setCntr]=useState("")
  const img= porps.img;
  const setImg=porps.setImg;
  const setFound=porps.setFound;
  const found=porps.found;
  let country="";
  airports.map((item,index)=>{
    if(item.code===porps.country.to){
      country=item.country;
    }
  }
  )
  function setImgs(imgs){
    if (imgs== ""){
      imgs="https://react.semantic-ui.com/images/wireframe/image.png"
    }
    setImg(imgs);
  }

  useEffect(()=>{
    setCntr(country);
    for(countrie in countryimg){
      if(countrie==country){
        setFound(true);
        setImgs(countryimg[countrie]);
      }
    }

  },[country])
  
  if(img==""){
    if(found==false){
      setImgs("");
    }
    return ( 
      <ActivityIndicator animating={true} />
    )
  }
  //style sheet to put some border radius to the main view 
  const styleMain = {
    Ongoingcont: {
      borderRadius: 20,
      overflow: "hidden",
    }
  };
  return (
    <View style={styleMain.Ongoingcont}>
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
    </View>
  );
};
const PastFlights = (porps) => {
  const [cntr,setCntr]=useState("")
  const [img,setImg]=useState("")
  const [found,setFound]=useState(false)

  function setImgs(imgs){
    if (imgs== ""){
      imgs="https://react.semantic-ui.com/images/wireframe/image.png"
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
        setFound(true);
        setImgs(countryimg[countrie]);
      }
    }

  }
  ,[country])

  if(img==""){
    if(found==false){
      setImgs("");
    }
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
  const [img,setImg]=useState("")
  const [found,setFound]=useState(false)

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
        <View style={{ marginLeft: "10%" , marginTop:"5%" }}>

        <Text style={styles.HeadingTxt}>My Flights:</Text>

          <OnGoingFlights img={img} setImg={setImg} found={found} setFound={setFound} country ={firstItem}/>
        </View>
        <Text style={styles.Moretxt}>More:</Text>

        <View style={{ flexDirection:'row',marginBottom:80}}>
        <ScrollView horizontal={true}>
          {
            info[7].map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>{setFirstItem(item),setImg(""),setFound(false)}}>
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
