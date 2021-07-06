import * as SecureStore from "expo-secure-store";

import { Button, Input, useTheme } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Logo from "components/Logo";
import { fetchUser } from "store/actions/user";
import firebase from "firebase";
import { spotliteApi } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../utils/validate";

interface Props {
  navigation: string;
}

const Login = ({ navigation }: Props): JSX.Element => {
  const { theme } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const login = async () => {
    if (!validateEmail(username)) {
      await spotliteApi
        .get(`username-to-email/${username}`)
        .then((resp) => {
          firebaseLogin(resp.data);
        })
        .catch((err) => console.error(err));
    } else {
      firebaseLogin();
    }
  };

  const firebaseLogin = (email = username) => {
    // firebase.auth().signOut;
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then((userCredentials) => {
        // Signed in
        const user = userCredentials.user;
        const email = user?.email;
        console.log("\n\n\n\n\n user: ", user?.email);
        dispatch(fetchUser(email));
        user?.getIdToken().then((token) => {
          console.log("token TEST: ", token);
          SecureStore.setItemAsync("token", token);
        });
        // const token = userCredentials.user.getToken();
        if (!user?.emailVerified) {
          navigation.replace("EmailVerification");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case "auth/invalid-email":
            setError("Invalid email address");
            break;
          case "auth/wrong-password":
            setError("Incorrect password");
            break;
          case "auth/user-not-found":
            setError("User does not exist");
            break;
          case "auth/too-many-requests":
            setError(
              "Too many failed login attempts. Please reset password or try again later"
            );
            break;
          default:
            setError("Unable to login. Please try again later");
        }
        console.log("err: ", errorCode);
        console.log("err: ", errorMessage);
      });
  };

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Logo style={styles(theme).logo} />
      <Input
        label="Username or email"
        placeholder="Username or email..."
        labelStyle={{ color: theme.colors?.black }}
        onChangeText={(text) => setUsername(text.replace(/\s/g, ""))}
        value={username}
        leftIcon={{
          type: "material",
          name: "person-pin",
          color: theme.colors?.grey2,
        }}
      />
      <Input
        label="Password"
        secureTextEntry
        placeholder="Password..."
        labelStyle={{ color: theme.colors?.black }}
        onChangeText={(text) => setPassword(text.replace(/\s/g, ""))}
        value={password}
        leftIcon={{
          type: "material",
          name: "lock",
          color: theme.colors?.grey2,
        }}
      />
      <Text style={styles(theme).error}>{error}</Text>
      <Button title="LOGIN" onPress={login} />
      <Text
        style={styles(theme).forgot}
        onPress={() => navigation.replace("PasswordReset")}
      >
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    logo: {
      alignSelf: "center",
      marginVertical: -40,
      paddingVertical: 80,
    },
    error: {
      color: theme.colors.error,
      paddingLeft: "3%",
      position: "relative",
      top: -20,
    },
    forgot: {
      color: theme.colors.grey3,
      textAlign: "right",
      marginTop: 10,
      marginRight: 5,
    },
  });

export default Login;
