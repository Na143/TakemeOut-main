import React from "react";
import ToDoList from '../components/ToDoList'
import {LOCATIONS} from '../data/Data'
import { View, Text, Keyboard } from "react-native";
import GridTileLocation from "../components/GridTileLocation";

import { FlatList } from "react-native";
export default FavScreen = ({route,navigation}) => {
    const favToDos = LOCATIONS.filter(item => item.isFav);

    //Hier sollen die favorisierten Veranstaltungen gelistet werden - siehe ToDoApp! 
    //Zugriff ebenfalls über Dummy-Data 
    return(
      <FlatList
     data={favToDos}
  
      renderItem={(favToDos) => 
        { return <GridTileLocation  text={favToDos.item.title}  id={favToDos.item.id} /> }}
      numColumns={1} 
    />
        
    );
}