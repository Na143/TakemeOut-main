import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavScreen from '../screens/FavScreen';

const FavStack = createStackNavigator();

export default FavNavigator = () => {
    return (

        <FavStack.Navigator initialRouteName='Favorites' screenOptions={{
            headerStyle: { height: 120, backgroundColor: '#ffffff'},
            headerTitleStyle: {
                fontSize: 36,
                fontWeight: 'bold',
                color: '#5049b3',
                fontFamily: 'DanceToday'

            }

        }}>
            <FavStack.Screen name='Favorites' component={FavScreen} />

        </FavStack.Navigator>

    );
}