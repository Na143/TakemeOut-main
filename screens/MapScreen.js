import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LOCATIONS } from '../data/Data'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE} 
      style={styles.map}
      initialRegion={{
        latitude: 53.551086,
        longitude: 9.993682,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
       >

         {
          LOCATIONS.map(marker => (
            <Marker
            coordinate = {{latitude: marker.latitude,
              longitude: marker.longitude}}
              title = {marker.title}
              /> 

          ))

         }


      </MapView>
    </View>
  );
}



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
