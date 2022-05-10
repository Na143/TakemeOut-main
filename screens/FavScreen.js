import React ,{useContext} from "react";

import GridTileLocation from "../components/GridTileLocation";
import { ToDoContext } from "../data/ToDoContext";
import { storeDate } from "../data/AppStorage";

import { FlatList } from "react-native";

export default FavScreen = ({route,navigation}) => {
  const [toDoData,setToDoData] = useContext(ToDoContext);  
    const favToDos = toDoData.locations.filter(item => item.isFav);
    const favHandler = (id)=>{
 
      let toDoItemToChange = toDoData.locations.find(toDoItem => toDoItem.id === id);
      toDoItemToChange.isFav = !toDoItemToChange.isFav;
  
      setToDoData(toDoData => ({
        categories: toDoData.categories, locations: toDoData.locations.map(toDoItem => toDoItem.id === id ? toDoItemToChange : toDoItem),
  
      }));
      storeDate(toDoData)
  
     }

   
    return(
      <FlatList
     data={favToDos}
  
      renderItem={(favToDos) => 
        { return <GridTileLocation onFav={favHandler} isFav={favToDos.item.isFav}
        lat={favToDos.item.latitude} lon={favToDos.item.longitude}
        text={favToDos.item.title} text2={favToDos.item.address} id={favToDos.item.id} /> }}
      numColumns={1} 
    />
        
    );
}