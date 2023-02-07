import { Button, Text, useTheme } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import EmailVerify from "./modules/EmailConfirm";
import firebase from "firebase";

const EmailVerification = (): JSX.Element => {
  const { theme } = useTheme();
  const [statusMessage, setStatusMessage] = useState("");
  const sendVerificationEmail = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        setStatusMessage("Email sent successfully");
      })
      .catch((err) => {
        setStatusMessage("Too many requests. Please try again later");
        console.error(err);
      });
  };

  const statusMessageStyles = () => {
    if (!statusMessage.toLowerCase().includes("success")) {
      return [styles(theme).statusMessage, styles(theme).statusMessageError];
    } else {
      return styles(theme).statusMessage;
    }
  };

  return (
    <View>
      <EmailVerify title="Email Verification Required" />
      <View style={styles(theme).buttonContainer}>
        <Text style={statusMessageStyles()}>{statusMessage}</Text>
        <Button
          title="Resend verification email"
          onPress={sendVerificationEmail}
          containerStyle={{ marginHorizontal: 20, marginVertical: 5 }}
        />
      </View>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    buttonContainer: {
      position: "relative",
      width: "100%",
      bottom: 30,
    },
    statusMessage: {
      textAlign: "center",
      position: "relative",
      bottom: 10,
    },
    statusMessageError: {
      color: theme.colors.error,
    },
  });

export default EmailVerification;
