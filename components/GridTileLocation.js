
import React, { useState, useEffect } from "react";
import { Modal,  StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import { showLocation } from 'react-native-map-link'
import * as Location from "expo-location";
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';


export default GridTileLocation = props => {
    const [modalVisible, setModalVisible] = useState(false);
    
    //get the current position (latitude/longitude)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const faveIconName = props.isFav ? "ios-star" : "ios-star-outline";
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);
        setLocation(location);
      
      })();
    }, []);
  
    
    if (errorMsg) {
      alert(errorMsg); 
    }
    return (

        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setModalVisible(true)}
        >
            
            
            <Button onPress={()=> {props.onFav(props.id)}}
            style={styles.favStyle} 
            type="clear" icon={<Ionicons 
            name={faveIconName} size={24} 
            color="#5049b3"  />}/> 

            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                

                <Pressable
                    style={[ styles.modalView]}
                    
                >
                    <Button
                    style={styles.closeStyle} 
                    onPress={() => setModalVisible(!modalVisible)}
                    type="clear" icon={<Ionicons 
                    name={"close"} size={44} 
                    color="white"  />}/> 
              
                    <Text style={styles.modalText}>{props.text}</Text>
                    
                    <TouchableOpacity
                        onPress={()=> showLocation({
                            latitude: props.lat,
                            longitude: props.lon,
                            sourceLatitude: latitude,  
                            sourceLongitude: longitude

                        
                        })}
                    
                    >
                    
                    <Text style={styles.addressText}>{props.text2}</Text>
                 
                    </TouchableOpacity>
                    
                </Pressable>
               

            </Modal>

            <Text style={styles.gridText}>{props.text}</Text>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    itemContainer: {

        flex: 1,
        flexDirection: 'column',

        margin: 20,
        padding: 15,
        width: 300,
        height: 100,
        backgroundColor: '#d1d2fb',
        alignItems: "flex-start",
        justifyContent: "flex-end",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10
    },
    favStyle:{
        //flex: 0.5,
        alignItems: 'flex-start',
        
        
    },
    closeStyle:{
        marginTop: 0,
        marginLeft: 260
        //alignItems: 'center',
        //justifyContent: "flex-end",

    },
    gridText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        color: "#5049b3"

    },
    modalView: {
        flex: 0.55,
        flexDirection: 'column',

        margin: 20,
        marginTop: 120,
        padding: 20,
        width: 350,
        height: 100,
        backgroundColor: '#5049b3',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10
      },
      modalText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "#faf3f3"
      },
      addressText: {
        marginTop:15,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "#faf3f3",
        textDecorationLine: 'underline'
      }
});
