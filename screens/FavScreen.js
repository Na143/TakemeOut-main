import React from "react";
import ToDoList from '../components/ToDoList'
import {EVENTS} from '../data/dummy-data'
import { View, Text, Keyboard } from "react-native";
import GridTileEvent from "../components/GridTileEvent";

import { FlatList } from "react-native";
export default FavScreen = ({route,navigation}) => {
    const favToDos = EVENTS.filter(item => item.isFav);

    //Hier sollen die favorisierten Veranstaltungen gelistet werden - siehe ToDoApp! 
    //Zugriff ebenfalls über Dummy-Data 
    return(
      <FlatList
     data={favToDos}
  
      renderItem={(favToDos) => 
        { return <GridTileEvent  text={favToDos.item.title}  id={favToDos.item.id} /> }}
      numColumns={1} 
    />
        
    );
}