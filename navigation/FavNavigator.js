import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavScreen from '../screens/FavScreen';

const FavStack = createStackNavigator();

export default FavNavigator = () => {
    return (

        <FavStack.Navigator initialRouteName='Favorites' screenOptions={{
            headerStyle: { height: 120 },
            headerTitleStyle: {
                fontSize: 32,
                fontWeight: 'bold',
                color: '#94d0cc'

            }

        }}>
            <FavStack.Screen name='Favorites' component={FavScreen} />

        </FavStack.Navigator>

    );
}