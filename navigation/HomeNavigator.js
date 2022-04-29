import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";

import CategoryScreen from "../screens/CategoryScreen";
import MapScreen from '../screens/MapScreen';
import { BackgroundImage } from "react-native-elements/dist/config";

const HomeStack = createStackNavigator();

export default HomeNavigator = () =>{
    return (

            <HomeStack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle:{height:120, backgroundColor: '#ffffff'},
                headerTitleStyle:{
                    fontSize:32,
                    fontWeight:'bold',
                    color:'#5049b3'


                    }

                }}>
                <HomeStack.Screen name='Take Me Out - Now!' component={HomeScreen}/>


                <HomeStack.Screen name='Category' component={CategoryScreen}/>
                <HomeStack.Screen name='Map' component={MapScreen}/>
            </HomeStack.Navigator>

    );
}