import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchFrom from './FlightSearch'
import FlightBrowse from './FlightBrowse'
import FlightBook from './FlightBook';
import { View, Text } from 'react-native';

function Acom ()  {
    return (
        <View>
            <Text>acom</Text>
        </View>
    )
}


const Stack = createStackNavigator();

function Search({ navigation,route}) {
    const {UserId} = route.params;

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" initialParams={{UserId}} component={SearchFrom} options={{headerShown: false}} />
                <Stack.Screen name="Browse" component={FlightBrowse} options={{headerShown: false}}/>
                <Stack.Screen name="Book"  component={FlightBook}  options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Search;