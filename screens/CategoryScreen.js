import React,{useLayoutEffect} from "react";
import {CATEGORIES,EVENTS} from '../data/Data';
import { View, Text, Image,StyleSheet } from "react-native";

import { FlatList } from "react-native";
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

import GridTileEvent from "../components/GridTileEvent";



export default CategoryScreen = ({route, navigation}) => {
  const events = EVENTS;
  
  const {itemId} = route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === itemId);
    const displayedEvents = EVENTS.filter(event =>event.categoryId === itemId);
   
   

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: selectedCategory.title,
            headerRight: () => (
                <Button 
                  type ='clear' 
                  icon={<Ionicons name='' size={32} color="rgb(0,122,255)"
                  onPress={()=>{navigation.navigate("AddEntry",{title:"ToDO"},{category: selectedCategory.title})}}
                  />}/>)
        })
        

    },[navigation]);
    //hier sollen die Veranstaltungen gelistet werden - Zugriff auf Dummy Data
    //zunächst nur wenig Infos, wenn man drauf klickt, öffnet sich neuer Screen mit mehr Infos! Touchable Opacity oder Button
    return(
      <FlatList
      data={displayedEvents}
  
      renderItem={(itemData) => 
        { return <GridTileEvent  text={itemData.item.title}  id={itemData.item.id} /> }}
      numColumns={1} 
    />
        

    );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems:'center',
    },
    tinyLogo: {
      paddingTop:140,  
  
      width: 320,
      height: 10,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
