import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {  StyleSheet } from "react-native";
import CategoryScreen from "../screens/CategoryScreen";
import MapScreen from '../screens/MapScreen';


const HomeStack = createStackNavigator();

export default HomeNavigator = () =>{
    return (

            <HomeStack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle:{height:120, backgroundColor: '#ffffff'},
                headerTitleStyle:{
                    fontSize:36,
                    fontWeight:'bold',
                    color:'#5049b3',
                    fontFamily: 'DanceToday'


                    }

                }}>
                <HomeStack.Screen  name='Take Me Out' component={HomeScreen}/>


                <HomeStack.Screen name='Category' component={CategoryScreen}/>
                <HomeStack.Screen name='Map' component={MapScreen}/>
            </HomeStack.Navigator>

    );
}
const styles = StyleSheet.create({
    title: {
     fontSize: 10
    },
   
  });