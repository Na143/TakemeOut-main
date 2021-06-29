import React,{useLayoutEffect} from "react";
import {CATEGORIES,TODOITEMS} from '../data/dummy-data';
import { View, Text, Image,StyleSheet } from "react-native";
import ToDoList from "../components/ToDoList"
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';




export default CategoryScreen = ({route, navigation}) => {
    const {itemId} = route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === itemId);
   // const displayedToDoItems = TODOITEMS.filter(item =>item.categoryId === itemId);
   
  //hat aktuell keinen Effekt, evtl später zu gebrauchen!
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
        <View>
          <Text style={{marginTop:100,marginLeft:80}}> Veranstaltung1 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Veranstaltung2 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Veranstaltung3 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Veranstaltung4 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Veranstaltung5 </Text>
      </View>
        

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
