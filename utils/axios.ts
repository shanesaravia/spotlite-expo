import * as SecureStore from "expo-secure-store";

import { apiConfig } from "configs";
import axios from "axios";
import firebase from "firebase";

// const refreshToken = () => {};

// const getToken = async () => {
//   const token = await SecureStore.getItemAsync("token");
//   return token;
// };

let spotliteApi;

const createSpotliteApi = async () => {
  const instance = axios.create({
    baseURL: apiConfig.apiRoot,
    timeout: 5000,
    headers: {
      "Accept-Version": 1,
      Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  // Handles a retry if authentication failed. Will renew idtoken and try once more.
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      let token;
      if (firebase.auth().currentUser) {
        token = await firebase.auth().currentUser?.getIdToken();
        await SecureStore.setItemAsync("token", token);
        console.log("token test: ", token);
      }
      const originalRequest = error.config;
      const status = error.response ? error.response.status : null;
      if (status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${await SecureStore.getItemAsync("token")}`;
        return axios(originalRequest);
      } else {
        return error;
      }
    }
  );

  return instance;
};

(async () => {
  spotliteApi = await createSpotliteApi();
})();

// spotliteApi.interceptors.response.use(response => response, error => {
//   const status = error.response ? error.response.status : null;
//   if (status === 403) {
//     return
//   }
// })

export { spotliteApi };
