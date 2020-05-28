import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { CommonActions } from '@react-navigation/native';

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { BottomTabScreen } from "../../Routes"


const SignupScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }),
      [navigation];
  });

  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {/* <Spacer /> */}
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button
          title="Signup"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
          <TouchableOpacity  onPress = {() => 
          navigation.navigate('BottomStack', { screen: 'Track' })
          }>
          <Text>Already have an account? Sign in instead</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    marginLeft: 15,
    // marginTop: 15,
    // fontWeight: 'bold',
    fontSize: 16,
    alignContent: 'center',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
