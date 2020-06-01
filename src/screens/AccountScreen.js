import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <SafeAreaView >
      <View>
        <Text style={styles.textStyle}>AccountScreen</Text>
        <Button title="Signout" onPress={signout} />
      </View>
   </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

export default AccountScreen;
