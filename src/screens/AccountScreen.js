import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AccountScreen = () => {
  return(
    <View>
      <Text style={styles.textStyle}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default AccountScreen;