import { View,Text } from "react-native"
import { getAccountInfo } from "../../data/LoginSignUp";
import { useEffect,useState } from "react";

const Accept = ({navigation,route}) => {
    const {UserId,info,setInfo} = route.params;
    const Data = route.params.data;
    const price = Data.price*100;
    
    const [newInfo,setNewInfo] = useState([]);

    useEffect(() => {
        async function fetchUserInfo() {
          const userAccountInfo = await getAccountInfo(UserId);
    
          setNewInfo(userAccountInfo);
        }
        fetchUserInfo();
      }, []);
    if(newInfo != []){
       setInfo(newInfo);
   navigation.navigate('Search',UserId);
    }
        return(
        <View>
            <Text>Your Flight had been booked, redirecting you to the home page...</Text>
        </View>
    );
}

export default Accept;