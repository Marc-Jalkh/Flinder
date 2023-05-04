import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlightRadar from './FlightRadar';
import RadarInfo from './RadarInfo'



const Stack = createStackNavigator();

function Radar() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Radar" >
                <Stack.Screen name="Radar" component={FlightRadar} options={{headerShown: false}} />
                <Stack.Screen name="Info" component={RadarInfo} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Radar;