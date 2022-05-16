import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../screens/MapScreen';

const MapStack = createStackNavigator();

export default MapNavigator = () => {
    return (

        <MapStack.Navigator initialRouteName='Karte' screenOptions={{
            headerStyle: { height: 120 },
            headerTitleStyle: {
                fontSize: 36,
                fontWeight: 'bold',
                color: '#5049b3',
                fontFamily: 'DanceToday'

            }

        }}>
            <MapStack.Screen name='Karte' component={MapScreen} />

        </MapStack.Navigator>

    );
}