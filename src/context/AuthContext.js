import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload }; //in case of successful signup I need not retain my state and hence no '...state'
    //instead I would like to nullify my error message
    case "signout":
      console.log('Signout Reducer called');
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      if (callback) {
        callback();
      }
      // console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signin with the given email and password and change the isSignedIn state
    //handle success by updating state
    //if signing up fails, we need to reflect the same somewhere here
  };
};

const signout = (dispatch) => {
  return async () => {
    try {
      console.log('Signout called');
      
      await AsyncStorage.setItem("token", null);
      dispatch({
        type: "signout",
      });
      
      let token = await AsyncStorage.getItem('token');
      console.log('token: ');
      console.log(token);

      if (callback) {
        callback();
      }
      
      // console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
