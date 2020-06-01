import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const listener = navigation.addListener("blur", () => {
      console.log("listener called");
      clearErrorMessage();
    });
    // tryLocalSignin();
    return listener;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        SubmitButtonText="Sign Up"
        onsubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
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

export default SignupScreen;
