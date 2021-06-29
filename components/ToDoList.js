import React from "react";
import { View,  FlatList } from "react-native";
import ToDoItemTile from './ToDoItemTile';

export default ToDoList = props => {
    const deleteHandler = (id) =>{
        console.log("delete!!");

    }
    const favHandler = (id) =>{

        console.log("Fav!");
    }
    return(

        <View style={{flex:1}}>
            <FlatList 
            data={props.listData} 
            keyExtractor={(item,index)=> item.id} 
            renderItem={(itemData) => 
                { return (<ToDoItemTile text={itemData.item.title} 
                    
                    isFav={itemData.item.isFav} 
                    onFav={favHandler}
                    onDelete={deleteHandler} id={itemData.item.id} />); }}
            style={{width: '100%'}}
            contentContainerStyle={{alignItems:'stretch', padding:20}}
            />
        </View>

    );
}