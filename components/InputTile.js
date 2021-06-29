import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default ToDoItemTile = props => {
    const [currentInput,setCurrentInput] = useState("");

    const changeTextHandler = (enteredText) => {
        setCurrentInput(enteredText);
    };
    const deleteHandler = () => {
        if(currentInput === ''){
            props.navigation.goBack();

        }
        else setCurrentInput("");


    };

  return (
    <View
      style={styles.itemContainer}>
      <Button
        onPress={() => {props.onAdd(currentInput)}}
        type='clear' icon={<Ionicons name='ios-checkmark-circle-outline'
          size={24} color="rgb(0,122,255)" />} />

      <TextInput placeholder={props.placeholderText} onChangeText={changeTextHandler} value={currentInput}/>

      <Button
        onPress={deleteHandler}
        type='clear' icon={<Ionicons name='ios-close-circle-outline'
          size={24} color="rgb(0,122,255)" />} />
    </View>

  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 15,
    height: 50,
    flexDirection: 'row',

    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  }
});
