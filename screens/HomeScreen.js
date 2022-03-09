import React,{useLayoutEffect} from "react";
import { FlatList } from "react-native";
import GridTile from "../components/GridTile";
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

import { CATEGORIES } from '../data/Data';

export default HomeScreen = ({navigation}) => {
  const categories = CATEGORIES;

  const clickHandler = id => {
    navigation.navigate("Category",{itemId: id});
  };
  



  return (
    <FlatList
      data={categories}
  
      renderItem={(itemData) => 
        { return <GridTile  text={itemData.item.title} onClick={clickHandler} id={itemData.item.id} /> }}
      numColumns={1} 
    />
  );
};

