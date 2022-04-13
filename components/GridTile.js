
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



export default GridTile = props => {

  return (
   
    <TouchableOpacity
      style={styles.itemContainer }
      
      
      onPress={() => props.onClick(props.id)}
    >
      <Text style={styles.gridText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
      
    flex: 1,
    flexDirection:'column',

    margin: 20,
    padding:15,
    width:300,
    height: 100,
    backgroundColor:'#d1d2fb',
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  gridText:{
      fontSize:16,
      fontWeight: 'bold',
      textAlign:'right',
      color:"#5049b3"

  },
});
