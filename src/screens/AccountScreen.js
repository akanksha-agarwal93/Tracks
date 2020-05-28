import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

import { Context as AuthContext } from "../context/AuthContext";


const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return(
    <View>
      <Text style={styles.textStyle}>AccountScreen</Text>
      <Button title="Signout" onPress={signout}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default AccountScreen;