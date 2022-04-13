import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator'
import FavNavigator from './FavNavigator';
import { Ionicons } from '@expo/vector-icons';
import MapNavigator from "./MapNavigator";

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'ios-home'
                        } else if (route.name === 'Favorites') {
                            iconName = focused ? 'ios-star' : 'ios-star-outline';
                        }
                        else if(route.name === 'Karte'){
                            iconName = focused ? 'ios-pin' : 'ios-pin-outline'
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#d1d2fb',
                    inactiveTintColor: '#5049b3',
                }}>
                <Tab.Screen name='Home' component={HomeNavigator} />
                <Tab.Screen name='Karte' component={MapNavigator} />
                <Tab.Screen name='Favorites' component={FavNavigator} />
               
            </Tab.Navigator>
        </NavigationContainer>
    );
}