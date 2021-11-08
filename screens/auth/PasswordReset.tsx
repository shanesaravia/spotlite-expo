import { Button, Input, Text, useTheme } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import EmailConfirm from "./modules/EmailConfirm";
import Logo from "components/Logo";
import { ThemeType } from "types";
import firebase from "firebase";

const PasswordReset = (): JSX.Element => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const firebaseResetPassword = () => {
    try {
      firebase
        .auth()
        .sendPasswordResetEmail(email.trim())
        .then(() => {
          setEmailSent(true);
        })
        .catch((err) => {
          console.warn(err);
          switch (err.code) {
            case "auth/invalid-email":
              setError("Invalid email address");
              break;
            case "auth/user-not-found":
              setError("User does not exist");
              break;
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  if (!emailSent) {
    return (
      <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
        <Logo style={styles(theme).logo} />
        <Input
          label="Email"
          placeholder="Email address..."
          labelStyle={{ color: theme.colors?.black }}
          onChangeText={(text) => setEmail(text.replace(/\s/g, ""))}
          value={email}
          leftIcon={{
            type: "material",
            name: "email",
            color: theme.colors?.grey2,
          }}
        />
        <Text style={styles(theme).error}>{error}</Text>
        <Button title="RESET PASSWORD" onPress={firebaseResetPassword} />
      </View>
    );
  } else {
    return <EmailConfirm title="Password Reset" email={email} />;
  }
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    logo: {
      alignSelf: "center",
      marginVertical: -40,
      paddingVertical: 100,
    },
    error: {
      color: theme?.colors?.error,
      paddingLeft: "3%",
      position: "relative",
      top: -20,
    },
  });

export default PasswordReset;
