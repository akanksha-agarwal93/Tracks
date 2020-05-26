import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TrackDetailScreen = () => {
  return(
    <View>
      <Text style={styles.textStyle}>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default TrackDetailScreen;