import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignupScreen = ({navigation}) => {
  return(
    <>
      <Text style={styles.textStyle}>SignupScreen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('Signin')}/>
      {/* <Button title="Go to main flow" onPress={() => navigation.navigate('MainFlow')}/> */}
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
    margin: 10,
  },
});

export default SignupScreen;