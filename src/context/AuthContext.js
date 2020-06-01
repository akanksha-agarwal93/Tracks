import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";


import { BottomTabScreen } from "../../Routes"

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload }; //in case of successful signup I need not retain my state and hence no '...state'
    //instead I would like to nullify my error message
    case "signout":
      return { errorMessage: "", token: null };
      case "signin": 
      return { errorMessage: "", token: action.payload };
      case "clear_error_message":
        return {...state, errorMessage: ""};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      
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
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      
      // console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    try {
      AsyncStorage.removeItem('token');
      dispatch({
        type: "signout",
      });
    } catch (err) {
      console.log(err);       
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };
};

const tryLocalSignin = dispatch => async() => {
  console.log('tryLocalSignin');
  
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  
  if(token){
    dispatch({
      type: "signin",
      payload: token,
    });
  }
}

const clearErrorMessage = dispatch => () => {     //this is the short hand writing for the above method
  dispatch({type: "clear_error_message"});
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" , isSignedIn: false, isLoading: false}
);
