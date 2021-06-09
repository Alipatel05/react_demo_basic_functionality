import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Camera } from "react-native-maps";

export default class Profile extends React.Component {
  render() {
    const mapRef = useRef<MapView>(null);
    const { width, height } = Dimensions.get("window");

    const ASPECT_RATIO = width / height;
    const LATITUDE = 23.0225;
    const LONGITUDE = 72.5714;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    useEffect(() => {
      if (mapRef.current) {
          const newCamera: Camera = {
              center: { latitude:LATITUDE, longitude: LONGITUDE },
              zoom: 15,
              heading: 0,
              pitch: 0,
              altitude: 5
          }

          mapRef.current.animateCamera(newCamera, { duration: 5000 });

      }
     });

    return (
      <View style={styles.container}>
        <MapView 
          ref={mapRef}
          style={StyleSheet.absoluteFillObject}
          provider={MapView.PROVIDE_GOOGLE}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}
            pinColor={"red"} // any color
            title={"Hello"}
            description={"Ahmedabad"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
