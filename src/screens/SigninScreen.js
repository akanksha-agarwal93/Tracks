import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from '../components/NavLink';

const SigninScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const listener = navigation.addListener("blur", () => {
      console.log("listener called");
      clearErrorMessage();
    });
    return listener;
  }, [navigation]);


  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        SubmitButtonText="Sign In"
        onsubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink
        text ="Don't have an account? Go back to Sign Up"
        routeName='Signup'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;