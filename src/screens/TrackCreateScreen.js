import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import { requestPermissionsAsync } from 'expo-location';

import Maps from '../components/Maps';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  },[]);

  return (
    <SafeAreaView>
      <Text h2>Create Track</Text>
      <Maps />
      {err ? <Text>Please enable location settings.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default TrackCreateScreen;
