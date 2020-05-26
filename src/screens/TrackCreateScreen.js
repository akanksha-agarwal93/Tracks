import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TrackCreateScreen = () => {
  return(
    <View>
      <Text style={styles.textStyle}>TrackCreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default TrackCreateScreen;