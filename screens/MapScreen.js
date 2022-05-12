import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Linking } from 'react-native';
import { LOCATIONS } from '../data/Data'

export default function App() {

 const openUrl = async (url) => {
            const isSupported = await Linking.canOpenURL(url);
            if (isSupported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this url: ${url}`);
            }
        }

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
            key={Math.random()}
            coordinate = {{latitude: marker.latitude,
              longitude: marker.longitude}}
              title = {marker.title}
              onPress={() => { Linking.openURL(`https://www.google.com/maps/place`)
               }}>
            </Marker>


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
