import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { AuthStackScreen, BottomTabScreen } from "./Routes";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";

const isSignedIn = false;
const userToken = null;
const GetToken = async () => {
  // const { state } = useContext(AuthContext);
  // if(state.token == null){
  //   userToken = await AsyncStorage.getItem("token");
  // }else{
  //   userToken = state.token;
  // }
  return userToken;
};

const App = () => {
  // let token = GetToken();
  const { state } = useContext(AuthContext);

  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        {state.token ? <BottomTabScreen /> : <AuthStackScreen />}
      </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
