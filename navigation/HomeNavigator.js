import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import InputScreen from '../screens/InputScreen';
import CategoryScreen from "../screens/CategoryScreen";
import MapScreen from '../screens/MapScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () =>{
    return (
       
            <HomeStack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle:{height:120},
                headerTitleStyle:{
                    fontSize:32,
                    fontWeight:'bold',
                    color:'#94d0cc'

                    }
                
                }}>
                <HomeStack.Screen name='Take Me Out - Now!' component={HomeScreen}/>
               
               
                <HomeStack.Screen name='Category' component={CategoryScreen}/>
                <HomeStack.Screen name='Map' component={MapScreen}/>
            </HomeStack.Navigator>
   
    );
}