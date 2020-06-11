import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Maps = () => {
  let points = [];
  for (let i = 0; i < 10; i++) {
    points.push({
      latitude: 19.15093038659959 + i * 0.001,
      longitude: 72.87565246224403 + i * 0.001,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 19.15093038659959,
        longitude: 72.87565246224403,
        latitudeDelta: 0.010881810429062696,
        longitudeDelta: 0.01098612695932388,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '70%',
    // width: 200,
  },
});

export default Maps;
