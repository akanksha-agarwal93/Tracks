import React, { useContext, useEffect } from "react";
import {} from "react-native";

import { Context as AuthContext } from "../context/AuthContext";

const LoadingAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  React.useLayoutEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default LoadingAuthScreen;