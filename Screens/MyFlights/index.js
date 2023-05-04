import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import styles from "../../assets/StyleSheet/MyFlightsStyles";
const OnGoingFlights = (porps) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/logo.png")}
        style={styles.Imagecontainer}
      >
        <View style={{ flex: 1 }}>
          <Text></Text>
        </View>
        <View style={styles.TextContainer}>
          <Text>Test</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const PastFlights = (porps) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/logo.png")}
        style={{ width: 140, height: 120, marginTop: 20,marginLeft:10 }}
      >
        <View style={{ flex: 1 }}>
          <Text></Text>
        </View>
        <View style={{ height: 20, backgroundColor: "#fffb" }}>
          <Text>Test</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const MyFlights = ({ navigation, route }) => {
  const { info, UserId } = route.params;
  if (info[7] == []) {
    return (
      <View>
        <Text>You have no flights Yet!</Text>
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
        <Text>My Flights:</Text>
        <View style={{ marginLeft: "10%" }}>
          <OnGoingFlights />
        </View>
        <Text>More:</Text>
        <View style={{ flexDirection:'row',marginBottom:80}}>
        <ScrollView horizontal={true}>
        <PastFlights />
            <PastFlights />
        </ScrollView>
        </View>
      

    </View>
  );
};

export default MyFlights;
