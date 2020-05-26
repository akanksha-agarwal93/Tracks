import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.textStyle}>TrackListScreen</Text>
      <Button title="Track Details" onPress={() => navigation.navigate('TrackDetail')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default TrackListScreen;