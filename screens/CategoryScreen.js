import React, { useLayoutEffect, useContext } from "react";
import { CATEGORIES, LOCATIONS } from '../data/Data';
import { View, Text, Image, StyleSheet } from "react-native";

import { FlatList } from "react-native";
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ToDoContext } from "../data/ToDoContext";

import GridTileLocation from "../components/GridTileLocation";




export default CategoryScreen = ({ route, navigation }) => {
  const [toDoData, setToDoData] = useContext(ToDoContext);


  const { itemId } = route.params;
  const selectedCategory = toDoData.categories.find(cat => cat.id === itemId);
  const displayedLocations = toDoData.locations.filter(event => event.categoryId === itemId);

  const favHandler = (id) => {
    let toDoItemToChange = toDoData.locations.find(toDoItem => toDoItem.id === id);
    toDoItemToChange.isFav = !toDoItemToChange.isFav;

    setToDoData(toDoData => ({
      categories: toDoData.categories, locations: toDoData.locations.map(toDoItem => toDoItem.id === id ? toDoItemToChange : toDoItem),

    }));

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
      headerRight: () => (
        <Button
          type='clear'
          icon={<Ionicons name='' size={32} color="#d1d2fb"
            onPress={() => { navigation.navigate("AddEntry", { title: "ToDO" }, { category: selectedCategory.title }) }}
          />} />)
    })


  }, [navigation]);
  
  return (
    <FlatList
      data={displayedLocations}

      renderItem={(itemData) => { return <GridTileLocation onFav={favHandler} isFav={itemData.item.isFav} lat={itemData.item.latitude} lon={itemData.item.longitude} text={itemData.item.title} text2={itemData.item.address} id={itemData.item.id} /> }}
      numColumns={1}
    />


  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  tinyLogo: {
    paddingTop: 140,

    width: 120,
    height: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
