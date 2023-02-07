import * as SecureStore from "expo-secure-store";

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGOUT,
} from "./actionTypes";

import firebase from "firebase";
import { spotliteApi } from "utils/axios";

const getEmail = async () => {
  const token = await SecureStore.getItemAsync("token");
  const decodedToken = await firebase.auth().verifyIdToken(token);
  console.log("decoded token: ", decodedToken);
  return decodedToken;
};

export const fetchUser = (email: string): Record<string, unknown> => {
  console.log("fetchUser called");
  // getEmail();
  console.log("\n\n\n\n\n\n email: ", email);
  return (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    // make API call
    // return spotliteApi.get(`/get-user-by-email/${email}`).then(
    //   (user) => dispatch({ type: FETCH_USER_SUCCESS, user }),
    //   (err) => dispatch({ type: FETCH_USER_FAILURE, err })
    // );
    return spotliteApi
      .get(`/get-user-by-email/${email}`)
      .then((resp) => {
        // console.log("resp: ", resp.data);
        dispatch({ type: FETCH_USER_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        console.log("ERRR: ", err);
        dispatch({ type: FETCH_USER_FAILURE, payload: err });
      });
    // success: dispatch({ type: FETCH_USER_SUCCESS, userData });
    // failure: dispatch({ type: FETCH_USER_FAILURE, err });
  };
  // return { type: USER_STATE_CHANGE };
};

export const userLogout = () => {
  return (dispatch) => {
    // Clear asyncstore to remove redux-persist
    dispatch({ type: USER_LOGOUT });
  };
};
