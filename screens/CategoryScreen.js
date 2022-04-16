import React,{useLayoutEffect} from "react";
import {CATEGORIES,LOCATIONS} from '../data/Data';
import { View, Text, Image,StyleSheet } from "react-native";

import { FlatList } from "react-native";
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

import GridTileLocation from "../components/GridTileLocation";



export default CategoryScreen = ({route, navigation}) => {

  
  const {itemId} = route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === itemId);
    const displayedLocations = LOCATIONS.filter(event =>event.categoryId === itemId);
   
   

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: selectedCategory.title,
            headerRight: () => (
                <Button 
                  type ='clear' 
                  icon={<Ionicons name='' size={32} color="#d1d2fb"
                  onPress={()=>{navigation.navigate("AddEntry",{title:"ToDO"},{category: selectedCategory.title})}}
                  />}/>)
        })
        

    },[navigation]);
    //hier sollen die Veranstaltungen gelistet werden - Zugriff auf Dummy Data
    //zunächst nur wenig Infos, wenn man drauf klickt, öffnet sich neuer Screen mit mehr Infos! Touchable Opacity oder Button
    return(
      <FlatList
      data={displayedLocations}
  
      renderItem={(itemData) => 
        { return <GridTileLocation  lat={itemData.item.latitude} lon={itemData.item.longitude} text={itemData.item.title} text2={itemData.item.address} id={itemData.item.id} /> }}
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
  
      width: 120,
      height: 10,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
