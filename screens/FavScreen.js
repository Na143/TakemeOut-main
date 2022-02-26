import React from "react";
import ToDoList from '../components/ToDoList'
import {EVENTS} from '../data/dummy-data'
import { View, Text, Keyboard } from "react-native";

export default FavScreen = ({route,navigation}) => {
    const favToDos = EVENTS.filter(item => item.isFav);

    //Hier sollen die favorisierten Veranstaltungen gelistet werden - siehe ToDoApp! 
    //Zugriff ebenfalls über Dummy-Data 
    return(
        <View>
          <Text style={{marginTop:100,marginLeft:80}}> Favorit1 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Favorit2 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Favorit3 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Favorit4 </Text>
          <Text style={{marginTop:100,marginLeft:80}}> Favorit5 </Text>
      </View>

        
    );
}