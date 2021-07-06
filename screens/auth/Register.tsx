import * as SecureStore from "expo-secure-store";

import { Button, Input, useTheme } from "react-native-elements";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Logo from "components/Logo";
import firebase from "firebase";
import { spotliteApi } from "utils/axios";
import { validateEmail } from "utils/validate";

interface Props {
  navigation: string;
}

const Register = ({ navigation }: Props): JSX.Element => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isKeyboardVisitble, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const validateFields = async () => {
    const emptyFieldMessage = "This field cannot be blank";
    let errorFound = false;

    try {
      if (!email) {
        setEmailError(emptyFieldMessage);
        errorFound = true;
      } else if (!validateEmail(email)) {
        setEmailError("Invalid Email Address");
        errorFound = true;
      } else if (await emailExists(email)) {
        setEmailError("Email address is already in use");
        errorFound = true;
      }
      if (!name) {
        setNameError(emptyFieldMessage);
        errorFound = true;
      }
      if (!username) {
        setUsernameError(emptyFieldMessage);
        errorFound = true;
      } else if (await usernameExists()) {
        setUsernameError("This username is already in use");
        errorFound = true;
      }
      if (!password || password.length < 6) {
        setPasswordError("Password should be at least 6 characters");
        errorFound = true;
      }
      if (errorFound) {
        throw new Error("Validation Failed");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const emailExists = async (email) => {
    return await spotliteApi
      .get(`check-email/${email}`)
      .then((resp) => {
        if (resp.request.status === 204) {
          console.log("returning true");
          return true;
        }
      })
      .catch((err) => {
        if (err.request.status === 404) {
          console.log("returning false");
          return false;
        }
      });
  };

  const usernameExists = async () => {
    return await spotliteApi
      .get(`check-username/${username}/`)
      .then((resp) => {
        if (resp.request.status === 204) {
          return true;
        }
      })
      .catch((err) => {
        if (err.request.status === 404) {
          return false;
        }
      });
  };

  const createUnverifiedUser = async (uid) => {
    return await spotliteApi
      .post("users/", {
        email,
        name,
        username,
        profile: {
          firebase_uid: uid,
        },
      })
      .then((resp) => {
        console.log("resp: ", resp);
        return true;
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  };

  const clearErrors = () => {
    setEmailError("");
    setNameError("");
    setUsernameError("");
    setPasswordError("");
  };

  const registerUser = () => {
    // Check if username exists already in API
    // Register user via firebase DONE
    // Store token in SecureStore DONE
    // Create user in APILost connection to MySQL server at 'handshake
    // Redirect to landing page stack
    console.log("registerUser called!!");
    // Create user in firebase
    try {
      clearErrors();
      validateFields();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          console.log("user credentials: ", userCredentials);
          // Signed in
          const user = userCredentials.user;
          const uid = user?.uid;
          console.log("\n\n\n\n\n uid: ", user.uid);
          createUnverifiedUser(uid);
          user.sendEmailVerification();
          user.getIdToken().then((token) => {
            console.log("token TEST: ", token);
            SecureStore.setItemAsync("token", token);
          });
          // const token = userCredentials.getToken();
          // SecureStore.setItemAsync("token", token);

          navigation.replace("EmailVerification");
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;
          console.log("err: ", errorMessage);
          switch (errorCode) {
            case "auth/invalid-email":
              setEmailError("Invalid email address");
              break;
            case "auth/email-already-in-use":
              setEmailError("Email address is already in use");
              break;
            case "auth/weak-password":
              setPasswordError("Password should be at least 6 characters");
              break;
            case "auth/operation-not-allowed":
              setPasswordError(`Error during sign up.`);
              break;
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      {!isKeyboardVisitble ? <Logo style={styles(theme).logo} /> : null}
      <Input
        label="Email"
        placeholder="Email address..."
        labelStyle={{ color: theme.colors?.black }}
        onChangeText={(text) => setEmail(text.trim())}
        value={email}
        leftIcon={{
          type: "material",
          name: "email",
          color: theme.colors?.grey2,
        }}
      />
      <Text style={styles(theme).error}>{emailError}</Text>
      <Input
        label="Full Name"
        placeholder="Full Name..."
        labelStyle={{ color: theme.colors?.black }}
        onChangeText={(text) => setName(text)}
        value={name}
        leftIcon={{
          type: "material",
          name: "person",
          color: theme.colors?.grey2,
        }}
      />
      <Text style={styles(theme).error}>{nameError}</Text>
      <Input
        label="Username"
        placeholder="Username..."
        labelStyle={{ color: theme.colors?.black }}
        onChangeText={(text) => setUsername(text.replace(/\s/g, ""))}
        value={username}
        leftIcon={{
          type: "material",
          name: "person-pin",
          color: theme.colors?.grey2,
        }}
      />
      <Text style={styles(theme).error}>{usernameError}</Text>
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
      <Text style={styles(theme).error}>{passwordError}</Text>
      <Button title="SIGN UP" onPress={registerUser} />
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    error: {
      color: theme.colors.error,
      paddingLeft: "3%",
      position: "relative",
      top: -20,
    },
    logo: {
      alignSelf: "center",
      marginVertical: -40,
      paddingVertical: 80,
    },
  });

// SecureStore.setItemAsync("secure_token", token);
// SecureStore.getItemAsync("secure_token").then((token) => console.log(token));

export default Register;
