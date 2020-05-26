import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const isSignedIn = true;

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signup" component={SignupScreen}/>
      <AuthStack.Screen name="Signin" component={SigninScreen}/>
    </AuthStack.Navigator>
  );
}

const TrackStack = createStackNavigator();
function TrackStackScreen() {
  return(
    <TrackStack.Navigator>
      <TrackStack.Screen name="TrackList" component={TrackListScreen}/>
      <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen}/>
    </TrackStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabScreen() {
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="Track" component={TrackStackScreen}/>
      <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen}/>
      <BottomTab.Screen name="Account" component={AccountScreen}/>
    </BottomTab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      {isSignedIn && <BottomTabScreen/> }
      {!isSignedIn && <AuthStackScreen/> }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
