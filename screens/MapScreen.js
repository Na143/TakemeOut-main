import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
// var map;
// function initMap() {
//   map = new google.maps.map(document.getElementById('map'), {
//     center: { lat: 53.551086, lng: 9.993682 },
//     Zoom: 9
//   });
//   var marker = new google.maps.marker((
//     position: {lat: 53.551086, lng: 9.993682},
//     map: map,
//     title: "Hello World!"
//   });
// },


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
