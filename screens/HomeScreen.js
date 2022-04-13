import React,{useLayoutEffect} from "react";
import { FlatList } from "react-native";
import GridTile from "../components/GridTile";
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import { View, Text, Image, ImageBackground, TextInput } from "react-native";
import { CATEGORIES } from '../data/Data';

export default HomeScreen = ({navigation}) => {
  const categories = CATEGORIES;

  const clickHandler = id => {
    navigation.navigate("Category",{itemId: id});
  };

  return (
   <ImageBackground
          source={require("../assets/back.png")}
          style={{ width: "100%", height: "100%" }}
        >

        <View
                  style={{
                    flexDirection: "row",
                    marginTop: 40,
                    alignItems: "center",
                    paddingHorizontal: 40,
                  }}>


    <FlatList
      data={categories}

      renderItem={(itemData) =>
        { return <GridTile  text={itemData.item.title} onClick={clickHandler} id={itemData.item.id} /> }}
      numColumns={1}
    />
    </View>
     </ImageBackground>
  );
}

