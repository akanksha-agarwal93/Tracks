import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator name="AuthStack">
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="Signin" component={SigninScreen} />
    </AuthStack.Navigator>
  );
}

const TrackStack = createStackNavigator();
function TrackStackScreen() {
  return (
    <TrackStack.Navigator  name="TrackStack">
      <TrackStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabScreen() {
  return (
    <BottomTab.Navigator name="BottomStack" initialRouteName = "Track" >
      <BottomTab.Screen name="Track" component={TrackStackScreen} />
      <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
}

export { AuthStackScreen, BottomTabScreen, TrackStackScreen };